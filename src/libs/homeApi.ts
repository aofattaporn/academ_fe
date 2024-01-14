import { ClassType, MytaskType, ProjectType } from "../types/HomeType";
import axiosInstance from "./axiosInstance";

const projectApi = async (user_id: string): Promise<ProjectType[]> => {
  const response = await axiosInstance.get(`api/v1/project/${user_id}`);
  return response.data.data;
};

const classApi = async (user_id: string): Promise<ClassType> => {
  const response = await axiosInstance.get(`api/v1/class/${user_id}`);
  return response.data;
};

const mytaskApi = async (user_id: string): Promise<MytaskType> => {
  const response = await axiosInstance.get(`api/v1/tasks/${user_id}`);
  return response.data;
};

const homeApi = { projectApi, classApi, mytaskApi };

export default homeApi;
