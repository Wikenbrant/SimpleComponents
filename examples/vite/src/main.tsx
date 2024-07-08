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

  // setInterval(() => {
  //   list.value = [...list.value, list.value.length + 1];
  //   console.log("setInterval: ", list.value);
  // }, 1000);
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
      <ul>{computed(() => list.value.map((i) => <li key={i}>{i}</li>))}</ul>
      {/* <ul>
        {list.value.map((i) => (
          <li>{i}</li>
        ))}
      </ul> */}
    </div>
  );
};

const onClick = () => {
  count.value++;
  console.log("onClick: ", count.value);
};

createRoot(rootElement).render(
  <>
    {1}
    {"2"}
    {true}
    {{}}
    {[
      [1, 2],
      [3, 4],
    ]}
    {/* <div>hej</div>
    <div>
      <button data-count={count} onClick={onClick}>
        1: {count}
      </button>
      <button data-count={count} onClick={onClick}>
        2: {count}
      </button>
    </div> */}
    {/* count: {computed(() => count.value)} */}
    <List />
    <List />
  </>
);
