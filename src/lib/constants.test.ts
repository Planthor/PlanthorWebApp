import { describe, it, expect } from "vitest";
import { GOAL_TYPES, GOAL_UNITS } from "./constants";

describe("GOAL_TYPES", () => {
  it("should be an array with at least one entry", () => {
    expect(Array.isArray(GOAL_TYPES)).toBe(true);
    expect(GOAL_TYPES.length).toBeGreaterThan(0);
  });

  it("each entry should have id, name and value", () => {
    for (const type of GOAL_TYPES) {
      expect(type).toHaveProperty("id");
      expect(type).toHaveProperty("name");
      expect(type).toHaveProperty("value");
      expect(typeof type.id).toBe("string");
      expect(typeof type.name).toBe("string");
      expect(typeof type.value).toBe("string");
    }
  });

  it("should include the expected goal types", () => {
    const names = GOAL_TYPES.map((t) => t.name);
    expect(names).toContain("Running");
    expect(names).toContain("Reading");
    expect(names).toContain("Coding");
    expect(names).toContain("Fitness");
    expect(names).toContain("Learning");
  });

  it("should have unique ids", () => {
    const ids = GOAL_TYPES.map((t) => t.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});

describe("GOAL_UNITS", () => {
  it("should be an array of strings", () => {
    expect(Array.isArray(GOAL_UNITS)).toBe(true);
    for (const unit of GOAL_UNITS) {
      expect(typeof unit).toBe("string");
    }
  });

  it("should include expected units", () => {
    expect(GOAL_UNITS).toContain("books");
    expect(GOAL_UNITS).toContain("km");
    expect(GOAL_UNITS).toContain("hours");
    expect(GOAL_UNITS).toContain("minutes");
  });

  it("should have no duplicates", () => {
    const uniqueUnits = new Set(GOAL_UNITS);
    expect(uniqueUnits.size).toBe(GOAL_UNITS.length);
  });
});
