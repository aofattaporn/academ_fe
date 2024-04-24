import { authMock } from "./authMock";
import { projectMock } from "./projectMock";
import userMock from "./userMock";
import homeMock from "./homeMock";
import myTasksMock from "./mytasksMock";
import { tasksMock } from "./tasksMock";

// ingeneral case handler
export const handlers = [
  // home-mock-api
  homeMock.projectSucces,
  homeMock.classSucces,
  homeMock.mytaskSucces,
  homeMock.projectBussinessError,
  homeMock.classBussinessError,
  homeMock.myTasksBussinessError,

  // auth-mock-api
  authMock.signInSuccess,
  authMock.signUpSuccess,
  authMock.signInGoogleSuccess,

  // my-tassk-mock-api
  myTasksMock.myTasksSuccess,

  // user-mock-api
  userMock.getUserSuccess,

  // project-mock-api
  projectMock.createProjectSuccess,
  projectMock.getAllProjectSuccess,
  projectMock.getProjectSuccess,
  projectMock.getProjectDetailsSuccess,
  projectMock.updateProjectDetailsSuccess,
  projectMock.getProjectRoleAndPermissionSuccess,
  projectMock.createProjectRoleAndPermissionSuccess,
  projectMock.updateRoleNameSuccess,
  projectMock.deleteRoleSuccess,
  projectMock.updatePermissionSuccess,
  projectMock.getProjectMembers,
  projectMock.changeRoleMember,

  // tasks-mock-api
  tasksMock.getAllTasksByProjectId,
  tasksMock.getTasksByTasksId,
  tasksMock.createTasks,
  tasksMock.updateTasksByTasksId,
  tasksMock.changeProcess,
  tasksMock.deleteTasks,
];
