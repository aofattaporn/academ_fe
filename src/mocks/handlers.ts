import { authMock } from "./authMock";
import homeMock from "./homeMock";
import myTasksMock from "./mytasksMock";

// ingeneral case handler
export const handlers = [
  homeMock.project_succes,
  homeMock.class_succes,
  // homeMock.mytask_succes,
  authMock.signInSuccess,
  authMock.signUpSuccess,
  authMock.signInGoogleSuccess,
  myTasksMock.myTasksSuccess,
];
