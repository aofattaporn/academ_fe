import { ResponseCustom } from "../types/GenericType";
import { ProjectList, ProjectRequestType } from "../types/ProjectType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const createProject = async (
  data: ProjectRequestType
): Promise<ResponseCustom<null>> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.post("api/v1/projects", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};

const getAllProject = async (): Promise<ProjectList[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get("api/v1/projects", {
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

const projectApi = { createProject, getAllProject };

export default projectApi;
