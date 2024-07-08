import { effect } from "@preact/signals-core";
import { VNode } from "./vNode";

export default abstract class SimpleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    effect(() => {
      if (!this.shadowRoot) return;
      this.shadowRoot.innerHTML = "";
      const result = this.render();

      if (result instanceof HTMLElement) {
        this.shadowRoot.append(result);
      }
    });
  }

  abstract render(): VNode;
}
