import { HttpResponse, delay, http } from "msw";
import { Tasks } from "../types/MyTasksType";
import { RESPONSE_OK, ResponseCustom } from "../types/GenericType";
import moment from "moment";

// get-project-api
const getAllTasksByProjectId = http.get(
  "api/v1/tasks/projects/:projectId",
  () => {
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
          startDate: moment("2024-03-06"),
          dueDate: moment("2024-03-10"),
        },
        {
          tasksId: "987654321",
          tasksName: "Review Presentation",
          processId: "1",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "987654325",
          tasksName: "Review Presentation",
          processId: "1",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "987654215",
          tasksName: "Review Testcase",
          processId: "2",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "987654324",
          tasksName: "Testing",
          processId: "2",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
      ],
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getTasksByProjectId = http.get("api/v1/tasks/:tasksId", () => {
  const mockRes: ResponseCustom<Tasks> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: {
      tasksId: "123456789",
      tasksName: "Complete Report222",
      processId: "1",
      assignee: "John Doe",
      startDate: moment("2024-03-06"),
      dueDate: moment("2024-03-10"),
    },
  };

  return HttpResponse.json(mockRes, { status: 200 });
});

const createTasks = http.post("api/v1/tasks", () => {
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
        startDate: moment("2024-03-06"),
        dueDate: moment("2024-03-10"),
      },
      {
        tasksId: "987654321",
        tasksName: "Review Presentation",
        processId: "1",
        assignee: "Jane Smith",
        startDate: moment("2024-03-08"),
        dueDate: moment("2024-03-12"),
      },
      {
        tasksId: "987654325",
        tasksName: "Review Presentation",
        processId: "1",
        assignee: "Jane Smith",
        startDate: moment("2024-03-08"),
        dueDate: moment("2024-03-12"),
      },
      {
        tasksId: "987654215",
        tasksName: "Review Testcase",
        processId: "2",
        assignee: "Jane Smith",
        startDate: moment("2024-03-08"),
        dueDate: moment("2024-03-12"),
      },
      {
        tasksId: "987654324",
        tasksName: "Testing",
        processId: "2",
        assignee: "Jane Smith",
        startDate: moment("2024-03-08"),
        dueDate: moment("2024-03-12"),
      },
      {
        tasksId: "9876543777",
        tasksName: "New Testing",
        processId: "1",
        assignee: "",
        startDate: moment("2024-03-08"),
        dueDate: moment("2024-03-12"),
      },
    ],
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
      data: [
        {
          tasksId: "123456789",
          tasksName: "Complete Report222",
          processId: "1",
          assignee: "John Doe",
          startDate: moment("2024-03-06"),
          dueDate: moment("2024-03-10"),
        },
        {
          tasksId: "987654321",
          tasksName: "Review Presentation",
          processId: "1",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "987654325",
          tasksName: "Review Presentation",
          processId: "1",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "987654215",
          tasksName: "Review Testcase",
          processId: "2",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "987654324",
          tasksName: "Testing",
          processId: "2",
          assignee: "Jane Smith",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
        {
          tasksId: "9876543777",
          tasksName: "New Testing",
          processId: "1",
          assignee: "",
          startDate: moment("2024-03-08"),
          dueDate: moment("2024-03-12"),
        },
      ],
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

export const tasksMock = {
  getAllTasksByProjectId,
  getTasksByProjectId,
  createTasks,
  changeProcess,
};
