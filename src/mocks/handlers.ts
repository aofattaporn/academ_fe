import { authMock } from "./authMock";
import { projectMock } from "./projectMock";
import userMock from "./userMock";
import homeMock from "./homeMock";
import myTasksMock from "./mytasksMock";

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
  myTasksMock.myTasksSuccess,
  userMock.getUserSuccess,
  projectMock.createProjectSuccess,
  projectMock.getAllProjectSuccess,
];
