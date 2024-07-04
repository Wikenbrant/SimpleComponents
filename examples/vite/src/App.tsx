import SimpleComponent from "@simple-components/core";
import { computed, signal } from "@simple-components/core/reactivity";
import { JSXNode } from "../../../packages/simple-components-core/dist/types";
// import { customElement } from "@simple-components/core/decorators";

// @customElement("my-app")
export default class App extends SimpleComponent {
  count = signal(0);
  list = signal([1, 2, 3]);

  render(): JSXNode {
    return (
      <div>
        <h1 className={computed(() => (this.count.value % 2 ? "red" : "blue"))}>
          Counter
        </h1>
        <button onclick={() => this.count.value++}>{this.count}</button>
        <div>
          <button
            onclick={() =>
              (this.list.value = [
                ...this.list.value,
                this.list.value.length + 1,
              ])
            }
          >
            add
          </button>
          <ul>{computed(() => this.list.value.map((i) => <li>{i}</li>))}</ul>
        </div>
      </div>
    );
  }
}
