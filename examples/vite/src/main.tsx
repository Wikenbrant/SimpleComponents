import { createRoot } from "@simple-components/core/render";
import App from "./App";
import { useSignal } from "@simple-components/core/hooks";
import { computed, signal } from "@simple-components/core/reactivity";

window.customElements.define("my-app", App);

const rootElement = document.getElementById("root")!;

const count = signal(0);

//const list = signal([1, 2, 3]);
const List = () => {
  // const list = signal([1, 2, 3]);
  const list = useSignal([1, 2, 3]);
  return (
    <div>
      <button
        onClick={() => {
          list.value = [...list.value, list.value.length + 1];
          console.log("onClick: ", list.value);
        }}
      >
        add
      </button>
      <ul>{computed(() => list.value.map((i) => <li>{i}</li>))}</ul>
      {/* <ul>
        {list.value.map((i) => (
          <li>{i}</li>
        ))}
      </ul> */}
    </div>
  );
};

createRoot(rootElement).render(
  <>
    {/* <div>
      <p>hej</p>
      <p>hej</p>
      {{ app: true }}
    </div>
    <button data-count={count} onclick={() => count.value++}>
      add
    </button> */}
    <List />
  </>
);
