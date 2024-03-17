import { CreateTasks, Tasks } from "../types/MyTasksType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const getAllTasksByProjectId = async (projectId: string): Promise<Tasks[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `api/v1/tasks/projects/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const getTasksByProjectId = async (tasksId: string): Promise<Tasks> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(`api/v1/tasks/${tasksId}`, {
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

const createTasks = async (data: CreateTasks): Promise<Tasks[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.post(`api/v1/tasks`, data, {
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

const changeProcess = async (
  tasks: string,
  processId: string
): Promise<void> => {
  try {
    const token = await firebaseApi.getToken();
    await axiosInstance.post(`api/v1/tasks/${tasks}/process/${processId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

const tasksApi = {
  getAllTasksByProjectId,
  getTasksByProjectId,
  createTasks,
  changeProcess,
};

export default tasksApi;
