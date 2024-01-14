import { z } from "zod";

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
export const errorMessages = {
  fullNameRequired: `${labels.fullName} is required`,
  invalidEmailFormat: "Invalid email format",
  passwordMinLength: `${labels.password} must be at least 6 characters long`,
};

// SignIn Type Declaration

export const EMAIL_PASSWORD_INCORRECT = "Email or Password is incorrect";
export const EMAIL_ALREADY_EXISTING = "Email already existing";

export const signInSchema = z.object({
  email: z.string().email({ message: errorMessages.invalidEmailFormat }),
  password: z.string().min(6, { message: errorMessages.passwordMinLength }),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export type SignInType = {
  email: string;
  password: string;
};

// SignUp Type Declaration

export const signUpSchema = z.object({
  fullName: z.string().min(1, { message: errorMessages.fullNameRequired }),
  email: z.string().email({ message: errorMessages.invalidEmailFormat }),
  password: z.string().min(6, { message: errorMessages.passwordMinLength }),
});

export type SignUpType = {
  fullName: string;
  email: string;
  password: string;
};

export type SignUpSchema = z.infer<typeof signUpSchema>;

// SignUp Type Declaration

export const forgotSchema = z.object({
  email: z.string().email({ message: errorMessages.invalidEmailFormat }),
});

export type ForgotType = {
  email: string;
};

export type ForgotSchema = z.infer<typeof forgotSchema>;
