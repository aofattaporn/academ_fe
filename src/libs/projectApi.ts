import { ResponseCustom } from "../types/GenericType";
import { ProjectRequestType } from "../types/ProjectType";
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

const projectApi = { createProject };

export default projectApi;
