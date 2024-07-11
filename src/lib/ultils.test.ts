import { cubicOut } from "svelte/easing";
import { flyAndScale } from "./utils";

describe("flyAndScale()", () => {
  it("should return a valid TransitionConfig object with default parameters", () => {
    const node = document.createElement("div");
    const result = flyAndScale(node);

    expect(result).toHaveProperty("duration", 150);
    expect(result).toHaveProperty("delay", 0);
    expect(result).toHaveProperty("css");
    expect(result).toHaveProperty("easing", cubicOut);
  });
});
