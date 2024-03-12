import { CreateTasks, Tasks } from "../types/MyTasksType";
import axiosInstance from "./axiosInstance";

const getAllTasksByProjectId = async (projectId: string): Promise<Tasks[]> => {
  const response = await axiosInstance.get(
    `api/v1/projects/${projectId}/tasks`
  );

  return response.data.data;
};

const createTasks = async (data: CreateTasks): Promise<Tasks[]> => {
  const response = await axiosInstance.post(`api/v1/tasks`, data);

  return response.data.data;
};

const tasksApi = { getAllTasksByProjectId, createTasks };

export default tasksApi;
