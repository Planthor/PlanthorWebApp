import { describe, it, expect } from "vitest";
import { goalId, goalSchema, crudSchema, goalDB } from "./goals";

// ─── goalId ───────────────────────────────────────────────────────────────────

describe("goalId", () => {
  it("should generate a non-empty string", () => {
    const id = goalId();
    expect(id).toBeTypeOf("string");
    expect(id.length).toBeGreaterThan(0);
  });

  it("should generate a valid UUID", () => {
    const id = goalId();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });

  it("should generate unique ids", () => {
    const id1 = goalId();
    const id2 = goalId();
    expect(id1).not.toBe(id2);
  });
});

// ─── goalSchema ───────────────────────────────────────────────────────────────

describe("goalSchema", () => {
  const validGoal = {
    goalId: "123",
    goalname: "Run 5km",
    duedate: "2025-12-31",
    goaltype: "Running",
    goalcurrent: "0",
    goaltarget: "5",
    goalunit: "km",
    description: "Morning run",
  };

  it("should parse a valid goal object", () => {
    const result = goalSchema.safeParse(validGoal);
    expect(result.success).toBe(true);
  });

  it("should fail if goalname is too short (< 2 chars)", () => {
    const result = goalSchema.safeParse({ ...validGoal, goalname: "A" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Goal name is required");
    }
  });

  it("should fail if duedate is empty", () => {
    const result = goalSchema.safeParse({ ...validGoal, duedate: "" });
    expect(result.success).toBe(false);
  });

  it("should fail if goalcurrent is missing", () => {
    const { goalcurrent: _, ...withoutCurrent } = validGoal;
    const result = goalSchema.safeParse(withoutCurrent);
    expect(result.success).toBe(false);
  });

  it("should allow goaltype and description to be optional", () => {
    const { goaltype: _t, description: _d, ...minimal } = validGoal;
    const result = goalSchema.safeParse(minimal);
    expect(result.success).toBe(true);
  });

  it("should fail if description exceeds 256 characters", () => {
    const result = goalSchema.safeParse({
      ...validGoal,
      description: "x".repeat(257),
    });
    expect(result.success).toBe(false);
  });
});

// ─── crudSchema ───────────────────────────────────────────────────────────────

describe("crudSchema", () => {
  it("should allow goalId to be optional", () => {
    const result = crudSchema.safeParse({
      goalname: "Read 20 books",
      duedate: "2025-01-01",
      goalcurrent: "0",
      goaltarget: "20",
      goalunit: "books",
    });
    expect(result.success).toBe(true);
  });

  it("should still fail if required fields are missing", () => {
    const result = crudSchema.safeParse({ goalname: "Missing fields" });
    expect(result.success).toBe(false);
  });
});

// ─── goalDB ───────────────────────────────────────────────────────────────────

describe("goalDB", () => {
  it("should be an array with at least one entry", () => {
    expect(Array.isArray(goalDB)).toBe(true);
    expect(goalDB.length).toBeGreaterThan(0);
  });

  it("each entry should have a goalId, goalname and duedate", () => {
    for (const goal of goalDB) {
      expect(goal.goalId).toBeTruthy();
      expect(goal.goalname).toBeTruthy();
      expect(goal.duedate).toBeTruthy();
    }
  });

  it("each entry should have the required shape properties", () => {
    for (const goal of goalDB) {
      expect(goal).toHaveProperty("goalId");
      expect(goal).toHaveProperty("goalname");
      expect(goal).toHaveProperty("duedate");
      expect(goal).toHaveProperty("goalunit");
    }
  });
});