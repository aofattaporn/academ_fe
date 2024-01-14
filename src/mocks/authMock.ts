import { HttpResponse, http } from "msw";
import {
  EMAIL_ALREADY_EXISTING,
  EMAIL_PASSWORD_INCORRECT,
  SignInType,
} from "../types/AuthType";
import { RESPONSE_UNAUTHORIZED, ResponseCustom } from "../types/GenericType";

// sign-up mocking
const signUpSuccess = http.post("/api/v1/sign-up", () => {
  const mockRes: ResponseCustom<null> = {
    status: 200,
    message: "Success",
    description: "SignUp Seccess",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signUpFailedInternalError = http.post("/api/v1/sign-up", () =>
  HttpResponse.error()
);

const signUpFailedEmailExisting = http.post("/api/v1/sign-up", () => {
  const mockRes: ResponseCustom<null> = {
    status: 401,
    message: RESPONSE_UNAUTHORIZED,
    description: EMAIL_ALREADY_EXISTING,
  };
  return HttpResponse.json(mockRes, { status: 401 });
});

// sign-in mocking
const signInSuccess = http.post("/api/v1/sign-in", () => {
  const mockRes: ResponseCustom<SignInType> = {
    status: 200,
    message: "Success",
    description: "SignUp Seccess",
    data: {
      email: "example@mcok.com",
      password: "12345678",
    },
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signInGoogleSuccess = http.post("/api/v1/sign-in/google", () => {
  const mockRes: ResponseCustom<SignInType> = {
    status: 200,
    message: "Success",
    description: "SignUp Seccess",
    data: {
      email: "example@mcok.com",
      password: "12345678",
    },
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signInFailedInternalError = http.post("/api/v1/sign-in", () =>
  HttpResponse.error()
);

const signInFailedFormIncrrect = http.post("/api/v1/sign-in", () => {
  const mockRes: ResponseCustom<SignInType> = {
    status: 200,
    message: RESPONSE_UNAUTHORIZED,
    description: EMAIL_PASSWORD_INCORRECT,
  };
  return HttpResponse.json(mockRes, { status: 401 });
});

export const authMock = {
  signUpSuccess,
  signUpFailedInternalError,
  signUpFailedEmailExisting,
  signInSuccess,
  signInGoogleSuccess,
  signInFailedInternalError,
  signInFailedFormIncrrect,
};

export default authMock;
