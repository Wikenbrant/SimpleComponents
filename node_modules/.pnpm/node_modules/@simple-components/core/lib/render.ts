import { Signal, effect } from "./reactivity";
import type { ObjectLike, VNode } from "./types";
import { getLikeValue, isElementVNode, isTextVNode } from "./utils";

export const createRoot = (container: HTMLElement) => {
  const render = (vNodes: ObjectLike<VNode[]> | ObjectLike<VNode>) => {
    effect(() => {
      container.innerHTML = "";
      const nodes = getLikeValue(vNodes);

      if (Array.isArray(nodes)) {
        for (const node of nodes.flat(Infinity)) {
          appendChildren(container, node);
        }
      } else {
        appendChildren(container, nodes);
      }
    });
  };

  return {
    render,
  };
};

const appendChildren = (container: HTMLElement, vNode: ObjectLike<VNode>) => {
  const node = getLikeValue(vNode);
  if (!isElementVNode(node)) {
    const value = isTextVNode(node)
      ? getLikeValue(node.$text$) ?? ""
      : node?.toString() ?? JSON.stringify(node);

    const element = document.createTextNode(value);
    container.appendChild(element);
    return;
  }

  const tag = getLikeValue(node.$tag$);
  const element = document.createElement(tag);

  const props = fixProps(node.$props$);

  for (const [key, value] of Object.entries(props)) {
    if (key === "children") continue;
    const setAttribute = (key: string, value: any) => {
      if (
        typeof element[key as keyof HTMLElement] === "string" &&
        typeof value === "string"
      ) {
        element.setAttribute(key, value);
      } else if (
        key.startsWith("on") &&
        typeof value === "function" &&
        !isCustomElement(tag)
      ) {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (typeof element[key as keyof HTMLElement] === typeof value) {
        Object.assign(element, { [key]: value });
      } else {
        element.setAttribute(key, String(value));
      }
    };

    if (value instanceof Signal) {
      effect(() => {
        setAttribute(key, String(value.value));
      });
    } else {
      setAttribute(key, value);
    }
  }

  if (
    (node.$children$ instanceof Signal && node.$children$.peek().length > 0) ||
    (Array.isArray(node.$children$) && node.$children$.length > 0)
  ) {
    effect(() => {
      element.innerHTML = "";

      const children = getLikeValue(node.$children$)?.flat(Infinity) ?? [];
      for (const child of children) {
        appendChildren(element, child);
      }
    });
  }

  container.appendChild(element);
};

const fixProps = (props: Record<string, any>) => {
  if (!props) props = {};
  if (typeof props !== "object") throw new Error("Props must be an object");

  if ("className" in props) {
    props["class"] = props["className"];
    delete props["className"];
  }

  return props;
};

const isCustomElement = (element: string) =>
  !!window.customElements.get(element) || element.includes("-");
