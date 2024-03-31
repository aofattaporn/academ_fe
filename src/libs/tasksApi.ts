import moment from "moment";
import { ErrorCustom } from "../types/GenericType";
import { CreateTasks, Tasks } from "../types/MyTasksType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const getAllTasksByProjectId = async (
  tasksData: Tasks[] | undefined,
  projectId: string
): Promise<Tasks[]> => {
  try {
    if (tasksData) return tasksData;
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `api/v1/tasks/projects/${projectId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error Get All Tasks :", errorCustom.description);
    throw errorCustom;
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

const updateTasks = async (tasksId: string, data: Tasks): Promise<Tasks> => {
  data.dueDate = data.dueDate ? moment(data.dueDate).toDate() : null;
  data.startDate = data.startDate ? moment(data.startDate).toDate() : null;

  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.put(`api/v1/tasks/${tasksId}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data.data);

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
    const errorCustom = error as ErrorCustom;
    console.error("Error deleting tasks :", errorCustom.description);
    throw errorCustom;
  }
};

const tasksApi = {
  getAllTasksByProjectId,
  getTasksByProjectId,
  createTasks,
  updateTasks,
  changeProcess,
  deleteTasksById,
};

export default tasksApi;
