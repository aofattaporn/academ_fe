import { ErrorCustom } from "../types/GenericType";
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
    const errorCustom = error as ErrorCustom;
    console.error("Error get all tasks tasks :", errorCustom.description);
    throw errorCustom;
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
    const errorCustom = error as ErrorCustom;
    console.error("Error Creating tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const deleteTasksById = async (tasksId: string): Promise<Tasks[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.delete(`api/v1/tasks/${tasksId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error deleting tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const changeProcess = async (
  tasks: string,
  processId: string
): Promise<void> => {
  console.log(processId);
  try {
    const token = await firebaseApi.getToken();
    await axiosInstance.put(
      `api/v1/tasks/${tasks}/process/${processId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
  deleteTasksById,
};

export default tasksApi;
