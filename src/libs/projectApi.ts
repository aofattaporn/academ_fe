import { CreateProject, ListProject, Project } from "../types/ProjectType";
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
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const projectApi = { createProject, getAllProject, getProject };

export default projectApi;
