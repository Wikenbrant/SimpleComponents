export function customElement(name: string) {
  return function <T extends CustomElementConstructor>(CustomElementClass: T) {
    const Element = class extends CustomElementClass {};
    customElements.define(name, Element);

    return Element;
  };
}
