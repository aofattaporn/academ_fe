import { Tasks } from "../types/MyTasksType";
import axiosInstance from "./axiosInstance";

const getAllTasksByProjectId = async (projectId: string): Promise<Tasks[]> => {
  const response = await axiosInstance.get(
    `api/v1/projects/${projectId}/tasks`
  );

  return response.data.data;
};

const tasksApi = { getAllTasksByProjectId };

export default tasksApi;
