import { z } from "zod";

export const formSchema = z.object({
  goalname: z.string().min(2, { message: "reqired" }).max(256),
  duedate: z
    .string()
    .refine((v) => v, { message: "A date of due date is required!" })
});

export type FormSchema = typeof formSchema;