import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().max(16, "Firstname should not exceed 16 characters"),
  lastName: z.string().max(16, "Lastname should not exceed 16 characters").optional(),
  email: z.email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Must contain at least one special character"),
});

export type signupSchema = z.infer<typeof signupSchema >