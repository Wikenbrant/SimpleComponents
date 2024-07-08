import {
  computed,
  getValue,
  isSignal,
  ReadonlySignal,
  Signalish,
  UnpackSignal,
} from "./reactivity";
import {
  VNodeChildren,
  ComponentChild,
  FunctionComponent,
  isFunctionComponent,
  VNode,
  isVNode,
} from "./vNode";

const ids = new Map<FunctionComponent, number>();

export const createElement = (
  type: FunctionComponent | ComponentChild | string,
  props: unknown,
  ...children: ComponentChild[]
): Signalish<VNode> => {
  if (isSignal(type)) {
    return computed(() => internalCreateElement(type.value, props, children));
  }

  return internalCreateElement(type, props, children);
};

const internalCreateElement = (
  type: UnpackSignal<FunctionComponent | ComponentChild | string>,
  props: unknown,
  children: ComponentChild[]
): VNode => {
  if (isVNode(type)) return type;

  const normalizedChildren = normalizeChildren(children);
  if (isFunctionComponent(type)) {
    const { normalizedProps } = normalizeProps(props, normalizedChildren);

    return {
      type: "function",
      id: getId(type),
      function: type,
      props: normalizedProps,
    };
  }

  if (typeof type === "string") {
    return {
      type: "element",
      tag: type,
      props,
      children: normalizedChildren,
    };
  }

  if (Array.isArray(type)) {
    return {
      type: "fragment",
      children: normalizeChildren(type),
    };
  }

  return {
    type: "textNode",
    value: type,
  };
};

const normalizeChildren = (children: ComponentChild[]): VNodeChildren =>
  computed(() =>
    children.map((child) => {
      if (typeof child === "string") {
        return {
          type: "textNode",
          value: child,
        };
      }
      return createElement(child, null);
    })
  );

const normalizeProps = (
  props: unknown,
  children: VNodeChildren
): {
  normalizedProps: any;
  ref?: VNode["ref"];
  key?: VNode["key"];
} => {
  if (!props) return { normalizedProps: { children } };

  if (typeof props !== "object") throw new Error("Props must be an object");

  const { ref: _, key, ...rest } = props as Record<string, unknown>;

  const ref = "ref" in props && isRef(props.ref) ? props.ref : undefined;

  const normalizedProps = {
    ...rest,
    children,
  };

  return { normalizedProps, ref, key };
};

export const flatten = (vNodes: VNodeChildren): ReadonlySignal<VNode[]> =>
  computed(() => {
    const result: VNode[] = [];

    for (const vNode of getValue(vNodes)) {
      const node = getValue(vNode);
      if (node.type === "fragment") {
        result.push(...getValue(flatten(node.children)));
      } else {
        result.push(node);
      }
    }

    return result;
  });

const getId = (type: FunctionComponent) => {
  const currentId = ids.get(type) ?? -1;
  const id = currentId + 1;

  ids.set(type, id);

  return id;
};

const isRef = (value: any): value is VNode["ref"] =>
  value &&
  ((typeof value === "object" && "current" in value) ||
    typeof value === "function");
