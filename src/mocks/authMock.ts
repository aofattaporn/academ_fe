import { HttpResponse, http } from "msw";
import { SignInType } from "../types/AuthType";

const signIn_success = http.post("/api/sign-in", () => {
  const mockRes: SignInType = {
    email: "example@mcok.com",
    password: "12345678",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const signIn_failed_form_invalid = http.post("/api/sign-in", () =>
  HttpResponse.error()
);

const signIn_failed_somthing_when_wrong = http.post(
  "/api/sign-in",
  () => new HttpResponse(null, { status: 401 })
);

export const authMock = {
  signIn_success,
  signIn_failed_form_invalid,
  signIn_failed_somthing_when_wrong,
};

export default authMock;
