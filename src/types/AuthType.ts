import { z } from "zod";

// Common labels and placeholders
export const labels = {
  fullName: "Full Name",
  email: "Email",
  password: "Password",
};

export const placeholders = {
  fullName: `Input your ${labels.fullName}`,
  email: `Input your ${labels.email}`,
  password: `Input your ${labels.password}`,
};

// Common error messages
export const errorMessages = {
  fullNameRequired: `${labels.fullName} is required`,
  invalidEmailFormat: "Invalid email format",
  passwordMinLength: `${labels.password} must be at least 6 characters long`,
};

// Schema validation for sign-in
export const signInSchema = z.object({
  email: z.string().email({ message: errorMessages.invalidEmailFormat }),
  password: z.string().min(6, { message: errorMessages.passwordMinLength }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

// Schema validation for sign-up
export const signUpSchema = z.object({
  fullName: z.string().min(1, { message: errorMessages.fullNameRequired }),
  email: z.string().email({ message: errorMessages.invalidEmailFormat }),
  password: z.string().min(6, { message: errorMessages.passwordMinLength }),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
