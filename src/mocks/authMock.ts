import { HttpResponse, http } from "msw";
import { SignInType } from "../types/AuthType";

const signIn_success = http.post("/api/sign-in", () => {
  const mockRes: SignInType = {
    email: "example@mcok.com",
    password: "12345678",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

export { signIn_success };
