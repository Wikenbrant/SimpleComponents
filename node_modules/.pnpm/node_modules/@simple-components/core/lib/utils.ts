import { Signal } from "./reactivity";
import type {
  BooleanLike,
  ElementVNode,
  NumberLike,
  ObjectLike,
  StringLike,
  TextVNode,
} from "./types";

export const getLikeValue = <
  TValue extends StringLike | NumberLike | BooleanLike | ObjectLike | undefined,
  TReturn extends TValue extends Signal<infer TReturn> ? TReturn : TValue
>(
  value: TValue
): TReturn => (value instanceof Signal ? value.value : value);

export const isTextVNode = (node: any): node is TextVNode =>
  typeof node === "object" && "$text$" in node;
export const isElementVNode = (node: any): node is ElementVNode =>
  typeof node === "object" && "$tag$" in node;
