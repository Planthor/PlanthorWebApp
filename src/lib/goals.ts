import { z } from "zod";

export const goalSchema = z.object({
  goalId: z.string(),
  goalname: z.string().min(2, { message: "Goal name is required" }).max(256),
  duedate: z
    .string()
    .min(1, { message: "A date of due date is required!" }),
  goaltype: z.string().optional(),
  goalcurrent: z.string().min(1, { message: "Goal current is required" }).max(256),
  goaltarget: z.string().min(1, { message: "Goal target is required" }).max(256),
  goalunit: z.string().min(1, { message: "Goal unit is required" }).max(256),
  description: z.string().max(256).optional(),
});

export const crudSchema = goalSchema.extend({
  goalId: goalSchema.shape.goalId.optional()
});

export type Goal = z.infer<typeof goalSchema>;
export type GoalDB = Goal[];

export const goalId = () => crypto.randomUUID();

export const goalDB: GoalDB = [
  {
    goalId: goalId(),
    goalname: "Read 10 books",
    goaltype: "Reading",
    goalcurrent: "0",
    goaltarget: "10",
    goalunit: "books",
    description: "keep going!",
    duedate: "2024-11-27",
  },
  {
    goalId: goalId(),
    goalname: "Go to the gym",
    goaltype: "Fitness",
    goalcurrent: "0",
    goaltarget: "52",
    goalunit: "sessions",
    description: "",
    duedate: "2025-12-08",
  },
];
