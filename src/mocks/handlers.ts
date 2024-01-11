import { authMock } from "./authMock";
import homeMock from "./homeMock";

// ingeneral case handler
export const handlers = [
  authMock.signIn_success,
  authMock.signUp_success,
  authMock.signIn_success,
  homeMock.project_succes,
  homeMock.class_succes,
  homeMock.mytask_succes,
];
