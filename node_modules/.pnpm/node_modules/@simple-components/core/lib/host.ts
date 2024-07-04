import type {
  BooleanLike,
  FunctionalComponent,
  ObjectLike,
  StringLike,
} from "./types";

export interface HostAttributes {
  class?: StringLike | { [className: string]: BooleanLike };
  style?: { [key: string]: StringLike | undefined };
  ref?: (el: ObjectLike<HTMLElement> | null) => void;

  [prop: string]: any;
}

export const Host: FunctionalComponent<HostAttributes> = (_, children) =>
  children as any;
