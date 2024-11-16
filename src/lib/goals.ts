import { z } from "zod";

export const goalSchema = z.object({
  goalId: z.string().regex(/^\d+$/),
  goalname: z.string().min(2, { message: "Goal name is reqired" }).max(256),
  duedate: z
    .string()
    .refine((v) => v, { message: "A date of due date is required!" }),
  goaltype: z.string(),
  goalcurrent: z.string().min(0, { message: "reqired" }).max(256),
  goaltarget: z.string().min(0, { message: "reqired" }).max(256),
  goalunit: z.string().min(2, { message: "reqired" }).max(256),
  description: z.string().max(256),
});

export type goalDB = z.infer<typeof goalSchema>[];

// Set a global variable to preserve DB when Vite reloads.
const g = globalThis as unknown as { goalDB: goalDB };

export const goalId = () => String(Math.random()).slice(2);

export const goalDB: goalDB = [
  {
    goalId: goalId(),
    goalname: "Read 10 books",
    goaltype: "Reading",
    goalcurrent: "0",
    goaltarget: "10",
    goalunit: "km",
    description: "keep going!",
    duedate: "2024-11-27",
  },
  {
    goalId: goalId(),
    goalname: "Go to the gym",
    goaltype: "",
    goalcurrent: "",
    goaltarget: "",
    goalunit: "km",
    description: "",
    duedate: "2025-12-08",
  },
];
