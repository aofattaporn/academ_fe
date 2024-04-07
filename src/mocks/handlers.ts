import { authMock } from "./authMock";
import { projectMock } from "./projectMock";
import userMock from "./userMock";
import homeMock from "./homeMock";
import myTasksMock from "./mytasksMock";
import { tasksMock } from "./tasksMock";

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

  // project-mock-api
  projectMock.createProjectSuccess,
  projectMock.getAllProjectSuccess,
  projectMock.getProjectSuccess,
  projectMock.getProjectDetailsSuccess,

  // tasks-mock-api
  tasksMock.getAllTasksByProjectId,
  tasksMock.getTasksByTasksId,
  tasksMock.createTasks,
  tasksMock.updateTasksByTasksId,
  tasksMock.changeProcess,
  tasksMock.deleteTasks,
];
