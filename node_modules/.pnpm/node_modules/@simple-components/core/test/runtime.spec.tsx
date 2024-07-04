import { describe, it } from "vitest";
import { createRoot } from "../lib/runtime/render";

describe("runtime", () => {
  it("should work", () => {
    const rootElement = document.createElement("div");
    const root = createRoot(rootElement);

    const nodes = (
      <div>
        <p>hej</p>
      </div>
    );

    root.render(nodes);

    console.log("Rendered", rootElement.innerHTML);
  });
});
