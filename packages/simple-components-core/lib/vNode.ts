import { ReadonlySignal, Signalish } from "./reactivity";
import { JSX } from "./jsx-runtime";

export interface VNodeBase {
  type: String;
  key?: Key;
  /**
   * ref is not guaranteed by React.ReactElement, for compatibility reasons
   * with popular react libs we define it as optional too
   */
  ref?: Ref<any> | null;
  index?: number;
}

export interface FunctionVNode<P = {}> extends VNodeBase {
  type: "function";
  id: number;
  function: ComponentType<P>;
  props: P & { children: ComponentChild[] };
}

export const isFunctionVNode = (node: any): node is FunctionVNode =>
  isVNode(node) && node.type === "function";

export type VNodeChildren = ReadonlySignal<Signalish<VNode>[]>;

export interface ElementVNode<TTag extends keyof JSX.IntrinsicElements = any>
  extends VNodeBase {
  type: "element";
  tag: TTag;
  props: JSX.IntrinsicElements[TTag];
  children: VNodeChildren;
}

export const isElementVNode = (node: any): node is ElementVNode =>
  isVNode(node) && node.type === "element";

export interface TextVNode<V = any> extends VNodeBase {
  type: "textNode";
  value: V;
}

export const isTextVNode = (node: any): node is TextVNode =>
  isVNode(node) && node.type === "textNode";

export interface FragmentVNode extends VNodeBase {
  type: "fragment";
  children: VNodeChildren;
}

export const isFragmentVNode = (node: any): node is FragmentVNode =>
  isVNode(node) && node.type === "fragment";

export type VNode = FunctionVNode | ElementVNode | TextVNode | FragmentVNode;

export const isVNode = (node: any): node is VNode =>
  typeof node === "object" && "type" in node;

export type Key = string | number | any;

export type RefObject<T> = { current: T | null };
export type RefCallback<T> = (instance: T | null) => void;
export type Ref<T> = RefObject<T> | RefCallback<T> | null;

export type ComponentChild = Signalish<
  | VNode
  | object
  | string
  | number
  | bigint
  | boolean
  | null
  | undefined
  | ComponentChild[]
>;

export interface Attributes {
  key?: Key | undefined;
  jsx?: boolean | undefined;
}

export interface ClassAttributes<T> extends Attributes {
  ref?: Ref<T>;
}

export type RenderableProps<P, RefType = any> = P &
  Readonly<Attributes & { children?: ComponentChild[]; ref?: Ref<RefType> }>;

export type ComponentType<P = {}> = FunctionComponent<P>;

export interface FunctionComponent<P = {}> {
  (props: RenderableProps<P>): ComponentChild;
}

export const isFunctionComponent = (x: any): x is FunctionComponent =>
  typeof x === "function";
