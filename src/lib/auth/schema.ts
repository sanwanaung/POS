import * as z from "zod";

export const SignupSchema = z
  .object({
    firstName: z.string().min(1, { message: "Frist name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required." })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be 6 characters" })
      .refine(
        (password) =>
          /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])/.test(password),
        {
          message:
            "Password must contain at least one uppercase letter, one special character, and one number",
        }
      ),
    confirmPassword: z
      .string()
      .min(1, { message: "Comfirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password doesn't match",
  });

export type SignupFormType = z.infer<typeof SignupSchema>;

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be 6 characters" })
    .refine(
      (password) =>
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])/.test(password),
      {
        message:
          "Password must contain at least one uppercase letter, one special character, and one number",
      }
    ),
});

export type SignInFormType = z.infer<typeof SignInSchema>;
