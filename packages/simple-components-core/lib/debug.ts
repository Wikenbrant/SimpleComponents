import { effect, getValue, signal, Signalish } from "./reactivity";
import {
  ComponentChild,
  isElementVNode,
  isFragmentVNode,
  isFunctionVNode,
  isTextVNode,
} from "./vNode";
import { createElement } from "./create-element";
import { renderFunctionComponent } from "./hook-state";

export const dump = (vNode: ReturnType<typeof createElement>) => {
  const x = single(0, vNode);
  effect(() => {
    console.log(x.value);
  });
};
const single = (level: number, vNode: Signalish<ComponentChild>) => {
  const row = signal<string>("");

  const append = (value: string) => (row.value = row.value + value);
  const appendTabs = (numberOfTabs: number = level) =>
    append(getTabs(numberOfTabs));
  const appenNewLine = () => append("\n");

  const node = getValue(vNode);

  appendTabs();

  if (isElementVNode(node) || isFragmentVNode(node)) {
    const tag = isElementVNode(node) ? node.tag : "";
    append(`<${tag}>`);
    appenNewLine();

    getValue(node.children).forEach((child) => {
      appendTabs();
      const result = single(level + 1, child);
      append(result.value);
      appenNewLine();
    });

    appendTabs();
    append(`</${tag}>`);
  } else if (isTextVNode(node)) {
    append(getValue(node.value));
  } else if (isFunctionVNode(node)) {
    append(
      single(
        level,
        createElement(renderFunctionComponent(node, node.props), null)
      ).value
    );
  } else {
    append(String(node));
  }

  return row;
};

const getTabs = (level: number) => {
  let tabs = "";
  for (let i = 0; i < level; i++) {
    tabs += "  ";
  }

  return tabs;
};
