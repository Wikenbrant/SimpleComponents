import { createElement, flatten } from "./create-element";
//import { dump } from "./debug";
import { effect, getValue, Signalish } from "./reactivity";
import { renderFunctionComponent } from "./hook-state";

import {
  ComponentChild,
  ElementVNode,
  FunctionVNode,
  isElementVNode,
  isFragmentVNode,
  isFunctionVNode,
  isTextVNode,
  VNodeChildren,
} from "./vNode";

export const createRoot = (container: HTMLElement) => {
  const render = (vNode: ReturnType<typeof createElement>) => {
    effect(() => {
      container.innerHTML = "";
      const element = renderVNode(container, vNode);

      append(container, element);
    });
  };

  return {
    render,
  };
};

const renderVNode = (
  container: HTMLElement,
  vNode: Signalish<ComponentChild>
): HTMLElement | Text | undefined => {
  const node = getValue(vNode);

  if (isFunctionVNode(node)) return renderFunctionVNode(container, node);
  if (isElementVNode(node)) return renderElementVNode(node);
  if (isTextVNode(node)) return renderTextVNode(node.value);

  const isFragment = isFragmentVNode(node);

  if (isFragment || Array.isArray(node)) {
    const nodes: VNodeChildren = isFragment
      ? node.children
      : (node as unknown as VNodeChildren);

    appendChildren(container, nodes);
  }
};

const renderElementVNode = (vNode: ElementVNode) => {
  const element = document.createElement(vNode.tag);
  appendPropsToElement(element, vNode.props);

  appendChildren(element, vNode.children);

  return element;
};

const append = (
  container: HTMLElement,
  element: ReturnType<typeof renderVNode>
) => {
  if (!element) return;
  container.appendChild(element);
};

const appendChildren = (container: HTMLElement, children: VNodeChildren) => {
  //   const range = document.createRange();
  //   range.selectNodeContents(container);

  effect(() => {
    container.innerHTML = "";

    getValue(flatten(children)).forEach((child, _) => {
      const value = getValue(child);
      const element = renderVNode(container, value);
      append(container, element);
    });
  });
};

const renderFunctionVNode = (container: HTMLElement, vNode: FunctionVNode) => {
  const child = createElement(
    renderFunctionComponent(vNode, vNode.props),
    null
  );

  return renderVNode(container, child);
};

const renderTextVNode = (text: Signalish<any>) => {
  const textNode = document.createTextNode(String(getValue(text)));

  effect(() => {
    textNode.textContent = String(getValue(text));
  });

  return textNode;
};

const appendPropsToElement = (
  element: HTMLElement,
  props: Signalish<Record<string, unknown>> = {}
) => {
  for (const [key, signalishValue] of Object.entries(props ?? {})) {
    if (key === "children") continue;
    effect(() => {
      const value = getValue(signalishValue);
      const setAttribute = (key: string, value: any) => {
        if (typeof element[key as keyof HTMLElement] === "string") {
          element.setAttribute(key, value);
        } else if (
          key.startsWith("on") &&
          typeof value === "function" &&
          !isCustomElement(element.tagName.toLowerCase())
        ) {
          element.addEventListener(key.slice(2).toLowerCase(), value);
        } else if (typeof element[key as keyof HTMLElement] === typeof value) {
          Object.assign(element, { [key]: value });
        } else {
          element.setAttribute(key, String(value));
        }
      };
      setAttribute(key, value);
    });
  }
};

const isCustomElement = (element: string) =>
  !!window.customElements.get(element) || element.includes("-");
