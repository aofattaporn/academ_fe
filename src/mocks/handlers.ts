import { authMock } from "./authMock";

// ingeneral case handler
export const handlers = [
  authMock.signInSuccess,
  authMock.signUpSuccess,
  authMock.signInGoogleSuccess,
];
