import { z } from "zod";

export const formSchema = z.object({
  goalname: z.string().min(2, { message: "reqired" }).max(256),
  duedate: z
    .string()
    .refine((v) => v, { message: "A date of due date is required!" }),
  goaltype: z.string(),
  goalcurrent: z.string().min(2, { message: "reqired" }).max(256),
  goaltarget: z.string().min(2, { message: "reqired" }).max(256),
  goalunit: z.string().min(2, { message: "reqired" }).max(256),
  description: z.string().max(256)
});

export type FormSchema = typeof formSchema;