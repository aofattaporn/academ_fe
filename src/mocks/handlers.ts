import { authMock } from "./authMock";

// ingeneral case handler
export const handlers = [
  authMock.signIn_success,
  authMock.signUp_success,
  authMock.signIn_success,
  authMock.signIn_google_success,
];
