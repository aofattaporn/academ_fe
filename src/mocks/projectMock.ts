import { HttpResponse, delay, http } from "msw";
import { RESPONSE_OK, ResponseCustom } from "../types/GenericType";
import { ListProject, Project, Views } from "../types/ProjectType";

// create-project-api
const createProjectSuccess = http.post(
  "/api/v1/projects/users/id",
  async () => {
    const mockRes: ResponseCustom<ListProject> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: {
        projectId: "4",
        projectProfile: {
          projectName: "EchoEcho",
          avatarColor: "#6985FF",
        },
        membersCounts: 4,
        projectEndDate: new Date(),
      },
    };

    await delay(2000);
    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const createProjectError = http.post("/api/v1/projects/users/id", () =>
  HttpResponse.error()
);

// get-all-my-project-api
const getAllProjectError = http.get("/api/v1/projects/users/id", () =>
  HttpResponse.error()
);

const getAllProjectSuccess = http.get("/api/v1/projects/users/id", async () => {
  const mockRes: ResponseCustom<ListProject[]> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: [
      {
        projectId: "1",
        projectProfile: {
          projectName: "Academ",
          avatarColor: "#AF8AE2",
        },
        membersCounts: 4,
        projectEndDate: new Date(),
      },
      {
        projectId: "2",
        projectProfile: {
          projectName: "TungTee",
          avatarColor: "#FFA8A7",
        },
        membersCounts: 4,
        projectEndDate: new Date(),
      },
      {
        projectId: "3",
        projectProfile: {
          projectName: "XTra",
          avatarColor: "#6985FF",
        },
        membersCounts: 4,
        projectEndDate: new Date(),
      },
    ],
  };

  return HttpResponse.json(mockRes, { status: 200 });
});

// get-project-api
const getProjectSuccess = http.get("/api/v1/projects/:projectId", async () => {
  const mockRes: ResponseCustom<Project> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: {
      projectInfo: {
        projectId: "123",
        projectProfile: {
          projectName: "Sample Project",
          avatarColor: "#AF8AE2",
        },
        views: [Views.LIST, Views.BOARD, Views.TIMELINE, Views.CALENDAR],
        process: [
          {
            processId: "process1",
            processName: "Process 1",
            processColor: "#ff0000",
          },
          {
            processId: "process2",
            processName: "Process 2",
            processColor: "#00ff00",
          },
        ],
        members: [
          {
            userName: "User One",
          },
          {
            userName: "User Two",
          },
          {
            userName: "User Three",
          },
        ],
      },
      taskPermission: {
        addNew: true,
        delete: false,
        edit: true,
        manageProcess: true,
      },
    },
  };

  await delay(3000);

  return HttpResponse.json(mockRes, { status: 200 });
});

const getProjectError = http.get("/api/v1/projects/:projectId", () =>
  HttpResponse.error()
);

export const projectMock = {
  createProjectSuccess,
  getAllProjectSuccess,
  getAllProjectError,
  createProjectError,
  getProjectSuccess,
  getProjectError,
};
