import { HttpResponse, delay, http } from "msw";
import { Tasks } from "../types/MyTasksType";
import {
  RESPONSE_BUSSINESS_ERROR,
  RESPONSE_OK,
  RESPONSE_TECHNICAL_ERROR,
  ResponseCustom,
  STATUS_CODE_1899,
  STATUS_CODE_1999,
} from "../types/GenericType";

// TODO: MOCK DATA ON TASKS API

export const DEFULT_TASKS: Tasks[] = [
  {
    tasksId: "1",
    projectId: "123",
    processId: "456",
    tasksName: "Task 1",
    assignee: {
      userId: "789",
      userName: "John Doe",
      email: "john@example.com",
      roleId: "1",
      avatarColor: "#336699",
    },
    startDate: "2024-05-01T00:00:00Z",
    dueDate: "2024-05-10T00:00:00Z",
  },
];

export const MOCK_TASKS: Tasks[] = [
  {
    tasksId: "1",
    projectId: "123",
    processId: "456",
    tasksName: "Task 1",
    assignee: {
      userId: "789",
      userName: "John Doe",
      email: "john@example.com",
      roleId: "1",
      avatarColor: "#336699",
    },
    startDate: "2024-05-01T00:00:00Z",
    dueDate: "2024-05-10T00:00:00Z",
  },
];

// TODO: MOCK RESPONSE TASKS API
const getAllTasksByProjectId = http.get(
  "api/v1/tasks/projects/:projectId",
  () => {
    const mockRes: ResponseCustom<Tasks[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: MOCK_TASKS,
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getAllTasksByProjectIdFailedInternalError = http.get(
  "api/v1/tasks/projects/:projectId",
  () => HttpResponse.error()
);

const getAllTasksByProjectIdFailedNotFoundId = http.get(
  "api/v1/tasks/projects/:projectId",
  () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your project id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getTasksByTasksId = http.get("api/v1/tasks/:tasksId", async () => {
  const mockRes: ResponseCustom<Tasks> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: MOCK_TASKS.at(0),
  };

  await delay(1000);

  return HttpResponse.json(mockRes, { status: 200 });
});

const createTasksFailedInternalError = http.post("api/v1/tasks", () => {
  () => HttpResponse.error();
});

const createTasksFaildInvalidFeild = http.post("api/v1/tasks", () => {
  const mockRes: ResponseCustom<null> = {
    status: STATUS_CODE_1899,
    message: RESPONSE_BUSSINESS_ERROR,
    description: "Can't to get your project id",
  };

  return HttpResponse.json(mockRes, { status: 200 });
});

const updateTasksByTasksId = http.put(
  "api/v1/tasks/:tasksId",
  async ({ request }) => {
    const updateTasks = (await request.json()) as Tasks;
    const mockRes: ResponseCustom<Tasks> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: updateTasks,
    };
    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updateTasksByTasksIdFailedInternalError = http.put(
  "api/v1/tasks/:tasksId",
  () => HttpResponse.error()
);

const updateTasksByTasksIdFailedNotFoudId = http.put(
  "api/v1/tasks/:tasksId",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your tasks id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const deleteTasks = http.delete("api/v1/tasks/:tasksId", async () => {
  const mockRes: ResponseCustom<Tasks[]> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: DEFULT_TASKS,
  };

  await delay(3000);

  return HttpResponse.json(mockRes, { status: 200 });
});

const deleteTasksFailedInternalError = http.delete(
  "api/v1/tasks/:tasksId",
  () => HttpResponse.error()
);

const deleteTasksFailedNotFoundId = http.delete("api/v1/tasks/:tasksId", () => {
  const mockRes: ResponseCustom<null> = {
    status: STATUS_CODE_1999,
    message: RESPONSE_TECHNICAL_ERROR,
    description: "NOT FOUND TASK ID",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const changeProcess = http.put(
  "api/v1/tasks/:tasksId/process/:processId",
  () => {
    const mockRes: ResponseCustom<Tasks[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: MOCK_TASKS,
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const changeProcessFailedInternalError = http.put(
  "api/v1/tasks/:tasksId/process/:processId",
  () => HttpResponse.error()
);

const changeProcessFailedNotFoundId = http.put(
  "api/v1/tasks/:tasksId/process/:processId",
  () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "NOT FOUND TASK ID",
    };
    return HttpResponse.json(mockRes, { status: 200 });
  }
);

export const tasksMock = {
  // get-all-tasks-api-mocking
  getAllTasksByProjectId,
  getAllTasksByProjectIdFailedInternalError,
  getAllTasksByProjectIdFailedNotFoundId,

  // get-tasks-api-mocking
  getTasksByTasksId,

  // update-tasks-api-mocking
  updateTasksByTasksId,
  updateTasksByTasksIdFailedInternalError,
  updateTasksByTasksIdFailedNotFoudId,

  // create-tasks-api-mocking
  createTasksFailedInternalError,
  createTasksFaildInvalidFeild,

  // change-process-tasks-api-mocking
  changeProcess,
  changeProcessFailedInternalError,
  changeProcessFailedNotFoundId,

  // delete-tasks-api-mocking
  deleteTasks,
  deleteTasksFailedInternalError,
  deleteTasksFailedNotFoundId,
};
