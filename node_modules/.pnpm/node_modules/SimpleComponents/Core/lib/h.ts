import { computed } from "./reactivity";
import { resetHookIndex, setCurrentComponentState } from "./state";
import { ChildType, FunctionalComponent, VNode } from "./types";
import { getLikeValue, isElementVNode, isTextVNode } from "./utils";

export function h(
  nodeName: string | FunctionalComponent,
  props: any,
  ...children: ChildType[]
): VNode | VNode[] {
  if (typeof nodeName === "function") {
    return computed(() => {
      setCurrentComponentState(nodeName);
      const node = nodeName(props, children);
      resetHookIndex();
      return node;
    });
  }

  const $children$ = computed<VNode[]>(() =>
    children.map((child) => {
      if (isElementVNode(child) || isTextVNode(child)) return child;
      const value = getLikeValue(child);

      if (Array.isArray(value)) return value;

      return {
        $text$: String(value),
      };
    })
  );

  return {
    $tag$: nodeName,
    $props$: props,
    $children$,
  };
}
