import { authMock } from "./authMock";
import homeMock from "./homeMock";

// ingeneral case handler
export const handlers = [
  homeMock.projectSucces,
  homeMock.classSucces,
  homeMock.mytaskSucces,
  homeMock.projectBussinessError,
  homeMock.classBussinessError,
  homeMock.myTasksBussinessError,
  authMock.signInSuccess,
  authMock.signUpSuccess,
  authMock.signInGoogleSuccess,
];
