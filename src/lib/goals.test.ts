import { describe, it, expect } from "vitest";
import { goalId } from "./goals";

describe("goalId", () => {
  it("should generate a non-empty string", () => {
    const id = goalId();
    expect(id).toBeTypeOf("string");
    expect(id.length).toBeGreaterThan(0);
  });

  it("should generate a string of digits", () => {
    const id = goalId();
    expect(id).toMatch(/^\d+$/);
  });

  it("should generate unique ids", () => {
    const id1 = goalId();
    const id2 = goalId();
    expect(id1).not.toBe(id2);
  });
});