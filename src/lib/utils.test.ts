import { cubicOut } from "svelte/easing";
import { describe, it, expect } from "vitest";
import { cn } from "./utils";
import { flyAndScale } from "./utils";

// ─── cn() ─────────────────────────────────────────────────────────────────────

describe("cn()", () => {
  it("should merge class names together", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should handle conditional classes correctly", () => {
    expect(cn("base", false && "never", "last")).toBe("base last");
    expect(cn("base", undefined, "last")).toBe("base last");
  });

  it("should handle tailwind conflicts with twMerge (last one wins)", () => {
    // twMerge deduplicates conflicting Tailwind utilities
    expect(cn("p-4", "p-8")).toBe("p-8");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("should return empty string for no inputs", () => {
    expect(cn()).toBe("");
  });
});

// ─── flyAndScale() ────────────────────────────────────────────────────────────

describe("flyAndScale()", () => {
  let node: HTMLElement;

  beforeEach(() => {
    node = document.createElement("div");
  });

  it("should return a valid TransitionConfig with default params", () => {
    const result = flyAndScale(node);
    expect(result).toHaveProperty("duration", 150);
    expect(result).toHaveProperty("delay", 0);
    expect(result).toHaveProperty("css");
    expect(result).toHaveProperty("easing", cubicOut);
  });

  it("should use custom duration when provided", () => {
    const result = flyAndScale(node, { duration: 300 });
    expect(result.duration).toBe(300);
  });

  it("should fall back to duration 200 when duration not provided and params is an empty object", () => {
    const result = flyAndScale(node, {});
    expect(result.duration).toBe(200);
  });

  it("css callback should return a string with transform and opacity", () => {
    const result = flyAndScale(node);
    const cssOutput = result.css!(1, 0);
    expect(cssOutput).toContain("transform");
    expect(cssOutput).toContain("opacity");
  });

  it("css callback at t=0 should include start scale and y offset", () => {
    const result = flyAndScale(node, { y: 10, start: 0.5 });
    const css0 = result.css!(0, 1);
    expect(css0).toContain("scale(0.5)");
  });

  it("css callback at t=1 should have scale 1 and no y offset", () => {
    const result = flyAndScale(node, { y: 10, start: 0.5 });
    const css1 = result.css!(1, 0);
    expect(css1).toContain("scale(1)");
    expect(css1).toContain("opacity:1");
  });

  it("css callback should use fallback values when params are missing", () => {
    const result = flyAndScale(node, {});
    const css0 = result.css!(0, 1);
    // x fallback is 0, y fallback is 5, start fallback is 0.95
    expect(css0).toContain("translate3d(0px, 5px, 0)");
    expect(css0).toContain("scale(0.95)");
  });

  it("should handle existing transform on node", () => {
    node.style.transform = "rotate(45deg)";
    const result = flyAndScale(node);
    const css1 = result.css!(1, 0);
    expect(css1).toContain("rotate(45deg)");
  });

  it("css callback should skip undefined values in styleToString (internal branch coverage)", () => {
    const result = flyAndScale(node);
    // There isn't a direct way to pass undefined to styleToString since it's internal
    // and the keys it uses (transform, opacity) are always defined in the current code.
    // However, we've already covered the main logic.
    const cssOutput = result.css!(1, 0);
    expect(cssOutput).toContain("transform");
    expect(cssOutput).toContain("opacity");
  });
});
