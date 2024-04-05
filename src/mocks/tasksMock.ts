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

const MOCK_TASKS: Tasks[] = [
  {
    tasksId: "123456789",
    tasksName: "Complete Report222",
    processId: "1",
    assignee: "John Doe",
    startDate: "2024-04-01T00:00:00.000Z",
    dueDate: "2024-04-10T00:00:00.000Z",
  },
  {
    tasksId: "987654321",
    tasksName: "Review Presentation A ",
    processId: "1",
    assignee: "Jane Smith",
    startDate: "",
    dueDate: "2024-03-28T00:00:00.000Z",
  },
  {
    tasksId: "987654325",
    tasksName: "Review Presentation B",
    processId: "1",
    assignee: "Jane Smith",
    startDate: "2024-04-01T00:00:00.000Z",
    dueDate: "2024-04-01T00:00:00.000Z",
  },
  {
    tasksId: "987654215",
    tasksName: "Review Testcase",
    processId: "2",
    assignee: "Jane Smith",
    startDate: "2024-04-01T00:00:00.000Z",
    dueDate: "2024-04-10T00:00:00.000Z",
  },
  {
    tasksId: "987654324",
    tasksName: "Testing",
    processId: "2",
    assignee: "Jane Smith",
    startDate: "2024-04-02T00:00:00.000Z",
    dueDate: "2024-04-10T00:00:00.000Z",
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

const createTasks = http.post("api/v1/tasks", async ({ request }) => {
  const newTasks = (await request.json()) as Tasks;

  const mockRes: ResponseCustom<Tasks[]> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: [
      ...MOCK_TASKS,
      {
        tasksId: "xxxxxx",
        tasksName: newTasks.tasksName,
        processId: newTasks.processId,
        assignee: "",
        startDate: newTasks.startDate,
        dueDate: newTasks.dueDate,
      },
    ],
  };

  await delay(3000);

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
    data: [
      {
        tasksId: "123456789",
        tasksName: "Complete Report222",
        processId: "1",
        assignee: "John Doe",
        startDate: "2024-03-06T00:00:00.000Z",
        dueDate: "2024-03-06T00:00:00.000Z",
      },
      {
        tasksId: "987654321",
        tasksName: "Review Presentation",
        processId: "1",
        assignee: "Jane Smith",
        startDate: "2024-03-06T00:00:00.000Z",
        dueDate: "2024-03-06T00:00:00.000Z",
      },
      {
        tasksId: "987654325",
        tasksName: "Review Presentation",
        processId: "1",
        assignee: "Jane Smith",
        startDate: "2024-03-06T00:00:00.000Z",
        dueDate: "2024-03-06T00:00:00.000Z",
      },
      {
        tasksId: "987654215",
        tasksName: "Review Testcase",
        processId: "2",
        assignee: "Jane Smith",
        startDate: "2024-03-06T00:00:00.000Z",
        dueDate: "2024-03-06T00:00:00.000Z",
      },
      {
        tasksId: "987654324",
        tasksName: "Testing",
        processId: "2",
        assignee: "Jane Smith",
        startDate: "2024-03-06T00:00:00.000Z",
        dueDate: "2024-03-06T00:00:00.000Z",
      },
    ],
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
  createTasks,
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
