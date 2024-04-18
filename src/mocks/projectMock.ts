import { HttpResponse, delay, http } from "msw";
import {
  RESPONSE_BUSSINESS_ERROR,
  RESPONSE_OK,
  RESPONSE_TECHNICAL_ERROR,
  ResponseCustom,
  STATUS_CODE_1899,
  STATUS_CODE_1999,
} from "../types/GenericType";
import {
  FullMember,
  Invite,
  ListProject,
  MemberSetting,
  Project,
  ProjectDetails,
  RoleProject,
  Views,
} from "../types/ProjectType";
import {
  MOCK_ROLE,
  NEW_ROLE,
  Role,
  UPDATE_ROLE_NAME,
  UPDATE_ROLE_PERMISSION,
} from "../types/Permission";

const PROJECT_DETAILS: ProjectDetails = {
  projectId: "123",
  projectProfile: {
    projectName: "Sample Project",
    avatarColor: "#AF8AE2",
  },
  views: [Views.LIST, Views.BOARD, Views.TIMELINE, Views.CALENDAR],
  startDate: "2024-03-01T00:00:00.000Z",
  dueDate: "2024-04-01T00:00:00.000Z",
};

const mockedMembers: FullMember[] = [
  { userName: "John Doe", email: "john@example.com", roleId: "1", userId: "1" },
  {
    userName: "Jane Smith",
    email: "jane@example.com",
    roleId: "2",
    userId: "2",
  },
];

const mockInvite: Invite[] = [
  {
    inviteId: "1",
    inviteMail: "invite@email.com",
    inviteDate: "2024-04-01T00:00:00.000Z",
  },
  {
    inviteId: "2",
    inviteMail: "invite@email2.com",
    inviteDate: "2024-04-02T00:00:00.000Z",
  },
];

const mockedRoles: RoleProject[] = [
  { roleId: "1", roleName: "Admin" },
  { roleId: "2", roleName: "Editor" },
];

const mockedMemberSetting: MemberSetting = {
  invites: mockInvite,
  members: mockedMembers,
  roles: mockedRoles,
};

export default mockedMemberSetting;

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
            processId: "1",
            processName: "To Do",
            processColor: "#C2C2C2",
          },
          {
            processId: "2",
            processName: "Inprogress",
            processColor: "#F9E116",
          },
          {
            processId: "3",
            processName: "Done",
            processColor: "#72C554",
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
        delete: true,
        edit: true,
        manageProcess: true,
      },
    },
  };

  return HttpResponse.json(mockRes, { status: 200 });
});

const getProjectError = http.get("/api/v1/projects/:projectId", () =>
  HttpResponse.error()
);

const getProjectDetailsSuccess = http.get(
  "/api/v1/projects/:projectId/details",
  async () => {
    const mockRes: ResponseCustom<ProjectDetails> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: PROJECT_DETAILS,
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getProjectDetailsFailedInternalError = http.get(
  "/api/v1/projects/:projectId/details",
  () => HttpResponse.error()
);

const getProjectDetailsFailedNotFoundProjectId = http.get(
  "/api/v1/projects/:projectId/details",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your Project id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updateProjectDetailsSuccess = http.put(
  "/api/v1/projects/:projectId/details",
  async () => {
    const mockRes: ResponseCustom<ProjectDetails> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updateProjectDetailsFailedInternalError = http.put(
  "/api/v1/projects/:projectId/details",
  () => HttpResponse.error()
);

const updateProjectDetailsFailedNotFoundProjectId = http.put(
  "/api/v1/projects/:projectId/details",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your Project id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getProjectRoleAndPermissionSuccess = http.get(
  "/api/v1/projects/:projectId/roleAndPermission",
  async () => {
    const mockRes: ResponseCustom<Role[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: MOCK_ROLE,
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getProjectRoleAndPermissionFailedInternalError = http.get(
  "/api/v1/projects/:projectId/roleAndPermission",
  () => HttpResponse.error()
);

const getProjectRoleAndPermissionFailedNotFoundProjectId = http.get(
  "/api/v1/projects/:projectId/roleAndPermission",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your Project id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const createProjectRoleAndPermissionSuccess = http.post(
  "/api/v1/projects/:projectId/roleAndPermission",
  async () => {
    const mockRes: ResponseCustom<Role[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: [...MOCK_ROLE, NEW_ROLE],
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updateRoleNameSuccess = http.put(
  "/api/v1/projects/:projectId/roles/:roleId",
  async () => {
    const mockRes: ResponseCustom<Role[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: [...MOCK_ROLE, UPDATE_ROLE_NAME],
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updateRoleNameFailedInternalError = http.put(
  "/api/v1/projects/:projectId/roles/:roleId",
  () => HttpResponse.error()
);

const updateRoleNameFailedNotFoundProjectId = http.put(
  "/api/v1/projects/:projectId/roles/:roleId",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your Project id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const deleteRoleFailedInternalError = http.delete(
  "/api/v1/projects/:projectId/roles/:roleId",
  () => HttpResponse.error()
);

const deleteRoleSuccess = http.delete(
  "/api/v1/projects/:projectId/roles/:roleId",
  async () => {
    const mockRes: ResponseCustom<Role[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: MOCK_ROLE,
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const deleteRoleFailedHaveSomeOnewithinRole = http.delete(
  "/api/v1/projects/:projectId/roles/:roleId",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1899,
      message: RESPONSE_BUSSINESS_ERROR,
      description: "Have someone within this Role",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updatePermissionSuccess = http.put(
  "/api/v1/projects/:projectId/roles/:roleId/permissions",
  async () => {
    const mockRes: ResponseCustom<Role[]> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: [...MOCK_ROLE, UPDATE_ROLE_PERMISSION],
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const updatePermissionFailedInternalError = http.put(
  "/api/v1/projects/:projectId/roles/:roleId/permissions",
  () => HttpResponse.error()
);

const updatePermissionFailedNotFoundProjectId = http.put(
  "/api/v1/projects/:projectId/roles/:roleId/permissions",
  async () => {
    const mockRes: ResponseCustom<null> = {
      status: STATUS_CODE_1999,
      message: RESPONSE_TECHNICAL_ERROR,
      description: "Can't to get your Project id",
    };

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const getProjectMembers = http.get(
  "/api/v1/projects/:projectId/members",
  async () => {
    const mockRes: ResponseCustom<MemberSetting> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: mockedMemberSetting,
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

const changeRoleMember = http.put(
  "/api/v1/projects/:projectId/members/:userId/roles/:roleId",
  async ({ params }) => {
    const mockRes: ResponseCustom<{ roleId: string }> = {
      status: 200,
      message: RESPONSE_OK,
      description: "Success",
      data: {
        roleId: params.roleId as string,
      },
    };

    await delay(1000);

    return HttpResponse.json(mockRes, { status: 200 });
  }
);

export const projectMock = {
  // create-project-api-mocking
  createProjectSuccess,
  createProjectError,

  // get-all-project-api-mocking
  getAllProjectSuccess,
  getAllProjectError,

  // get-project-api-mocking
  getProjectSuccess,
  getProjectError,

  // get-project-details-api-mocking
  getProjectDetailsSuccess,
  getProjectDetailsFailedInternalError,
  getProjectDetailsFailedNotFoundProjectId,

  // update-project-details-api-mocking
  updateProjectDetailsSuccess,
  updateProjectDetailsFailedInternalError,
  updateProjectDetailsFailedNotFoundProjectId,

  // get-role-and-permission-sucess
  getProjectRoleAndPermissionSuccess,
  getProjectRoleAndPermissionFailedInternalError,
  getProjectRoleAndPermissionFailedNotFoundProjectId,

  // create-new-role
  createProjectRoleAndPermissionSuccess,

  // update-role-name-api-mocking
  updateRoleNameSuccess,
  updateRoleNameFailedInternalError,
  updateRoleNameFailedNotFoundProjectId,

  // delete-role-name-api-mocking
  deleteRoleSuccess,
  deleteRoleFailedInternalError,
  deleteRoleFailedHaveSomeOnewithinRole,

  // update-permisssion-api-mocking
  updatePermissionSuccess,
  updatePermissionFailedInternalError,
  updatePermissionFailedNotFoundProjectId,

  // get-project-members-api-mocking
  getProjectMembers,

  // change-roles-members-api-mocking
  changeRoleMember,
};
