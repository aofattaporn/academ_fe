import { authMock } from "./authMock";
import { projectMock } from "./projectMock";
import userMock from "./userMock";

// ingeneral case handler
export const handlers = [
  authMock.signInSuccess,
  authMock.signUpSuccess,
  authMock.signInGoogleSuccess,
  userMock.getUserSuccess,
  projectMock.createProjectSuccess,
];
