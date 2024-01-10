import { HttpResponse, http } from "msw";
import {
  EMAIL_ALREADY_EXISTING,
  EMAIL_PASSWORD_INCORRECT,
  SignInType,
  SignUpType,
} from "../types/AuthType";
import { ErrorCustom, RESPONSE_UNAUTHORIZED } from "../types/GenericType";

// sign-up mocking
const signUp_success = http.post("/api/v1/sign-up", () => {
  const mockRes: SignUpType = {
    fullName: "exampleName",
    email: "example@mcok.com",
    password: "12345678",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signUp_failed_internal_error = http.post("/api/v1/sign-up", () =>
  HttpResponse.error()
);

const signUp_failed_email_existing = http.post("/api/v1/sign-up", () => {
  const mockRes: ErrorCustom = {
    message: RESPONSE_UNAUTHORIZED,
    description: EMAIL_ALREADY_EXISTING,
  };
  return HttpResponse.json(mockRes, { status: 401 });
});

// sign-in mocking
const signIn_success = http.post("/api/v1/sign-in", () => {
  const mockRes: SignInType = {
    email: "example@mcok.com",
    password: "12345678",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signIn_google_success = http.post("/api/v1/sign-in/google", () => {
  const mockRes: SignInType = {
    email: "example@mcok.com",
    password: "12345678",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signIn_failed_internal_error = http.post("/api/v1/sign-in", () =>
  HttpResponse.error()
);

const signIn_failed_form_incrrect = http.post("/api/v1/sign-in", () => {
  const mockRes: ErrorCustom = {
    message: RESPONSE_UNAUTHORIZED,
    description: EMAIL_PASSWORD_INCORRECT,
  };
  return HttpResponse.json(mockRes, { status: 401 });
});

export const authMock = {
  signUp_success,
  signUp_failed_internal_error,
  signUp_failed_email_existing,
  signIn_success,
  signIn_google_success,
  signIn_failed_internal_error,
  signIn_failed_form_incrrect,
};

export default authMock;
