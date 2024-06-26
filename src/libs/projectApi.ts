import { ErrorCustom } from "../types/GenericType";
import { Permission, RoleAndRolePermission } from "../types/Permission";
import {
  AllMemberAndPermission,
  CreateProject,
  Invite,
  ListProject,
  Process,
  Project,
  ProjectDetails,
  ProjectDetailsPermission,
} from "../types/ProjectType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const createProject = async (data: CreateProject): Promise<ListProject> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.post("api/v1/projects", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

const getAllProjectHomePage = async (): Promise<ListProject[]> => {
  try {
    const token = await firebaseApi.getToken();

    const response = await axiosInstance.get("/api/v1/projects/homepage", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const getAllProject = async (): Promise<ListProject[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get("/api/v1/projects/users/id", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const getProject = async (projectId: string): Promise<Project> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(`/api/v1/projects/${projectId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const getProjectDetails = async (
  projectId: string
): Promise<ProjectDetailsPermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `/api/v1/projects/${projectId}/details`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error get all tasks tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const updateProjectDetails = async (
  projectId: string,
  projectDetails: ProjectDetails
): Promise<Project> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.put(
      `/api/v1/projects/${projectId}/details`,
      projectDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error get all tasks tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const getProjectRoleAndPermission = async (
  projectId: string
): Promise<RoleAndRolePermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `/api/v1/projects/${projectId}/roleAndPermission`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error get all tasks tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const createNewRoleAndPermission = async (
  projectId: string,
  newRole: { newRole: string }
): Promise<RoleAndRolePermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.post(
      `/api/v1/projects/${projectId}/roleAndPermission`,
      newRole,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error get all tasks tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const updateRoleName = async (
  projectId: string,
  roleId: string,
  newRole: { newRole: string }
): Promise<RoleAndRolePermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.put(
      `/api/v1/projects/${projectId}/roles/${roleId}`,
      newRole,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update role name :", errorCustom.description);
    throw errorCustom;
  }
};

const deleteRole = async (
  projectId: string,
  roleId: string
): Promise<RoleAndRolePermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.delete(
      `/api/v1/projects/${projectId}/roles/${roleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to delete role :", errorCustom.description);
    throw errorCustom;
  }
};

const settingPermission = async (
  projectId: string,
  permissionId: string,
  permission: Permission
): Promise<RoleAndRolePermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.put(
      `/api/v1/projects/${projectId}/permissions/${permissionId}`,
      permission,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const getAllMembers = async (
  projectId: string
): Promise<AllMemberAndPermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `/api/v1/projects/${projectId}/members`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const changeRoleMember = async (
  projectId: string,
  memberId: string,
  roleId: string
): Promise<AllMemberAndPermission> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `/api/v1/projects/${projectId}/members/${memberId}/roles/${roleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const inviteMember = async (projectId: string, invite: Invite) => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.post(
      `/api/v1/projects/${projectId}/invites`,
      invite,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const deleteInviteMember = async (projectId: string, inviteId: string) => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.delete(
      `/api/v1/projects/${projectId}/invites/${inviteId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const acceptInvite = async (tokenId: string) => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `/api/v1/projects/invites/token/${tokenId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const removeMember = async (projectId: string, memberId: string) => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.delete(
      `/api/v1/projects/${projectId}/members/${memberId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const deleteProjectById = async (projectId: string) => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.delete(
      `/api/v1/projects/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const archiveProjectById = async (
  projectId: string,
  isArchive: { isArchive: boolean }
) => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.put(
      `/api/v1/projects/${projectId}/archive`,
      isArchive,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

// process

const updateProcess = async (
  projectId: string,
  processId: string,
  process: Process,
  viewName: string
): Promise<Project> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.put(
      `/api/v1/projects/${projectId}/process/${processId}/views/${viewName}`,
      process,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const createProcess = async (
  projectId: string,
  process: Process,
  viewName: string
): Promise<Project> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.post(
      `/api/v1/projects/${projectId}/process/views/${viewName}`,
      process,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const deleteProcess = async (
  projectId: string,
  processId: string,
  viewName: string
): Promise<Project> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.delete(
      `/api/v1/projects/${projectId}/process/${processId}/views/${viewName}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const projectApi = {
  createProject,
  getAllProject,
  getProject,
  getProjectDetails,
  updateProjectDetails,
  getProjectRoleAndPermission,
  createNewRoleAndPermission,
  updateRoleName,
  deleteRole,
  settingPermission,
  getAllMembers,
  changeRoleMember,
  inviteMember,
  deleteInviteMember,
  acceptInvite,
  removeMember,
  deleteProjectById,
  getAllProjectHomePage,
  archiveProjectById,
  updateProcess,
  deleteProcess,
  createProcess,
};

export default projectApi;
