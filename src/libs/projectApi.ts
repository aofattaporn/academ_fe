import { ErrorCustom } from "../types/GenericType";
import { Role } from "../types/Permission";
import {
  CreateProject,
  ListProject,
  Project,
  ProjectDetails,
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

const getAllProject = async (): Promise<ListProject[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get("/api/v1/projects/users/id", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(token);
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

// TODO:
const getProjectDetails = async (
  projectId: string
): Promise<ProjectDetails> => {
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

// TODO:
const updateProjectDetails = async (
  projectId: string,
  projectDetails: ProjectDetails
) => {
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

// TODO:
const getProjectRoleAndPermission = async (
  projectId: string
): Promise<Role[]> => {
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

// TODO:
const createNewRoleAndPermission = async (
  projectId: string,
  newRole: { newRole: string }
): Promise<Role[]> => {
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

// TODO:
const updateRoleName = async (
  projectId: string,
  roleId: string,
  newRole: { newRole: string }
): Promise<Role[]> => {
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

// TODO:
const deleteRole = async (
  projectId: string,
  roleId: string
): Promise<Role[]> => {
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
};

export default projectApi;
