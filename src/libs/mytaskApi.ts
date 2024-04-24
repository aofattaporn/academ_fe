import { ErrorCustom } from "../types/GenericType";
import { MytaskType } from "../types/MyTasksType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const mytasksApi = async (): Promise<MytaskType> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(`/api/v1/projects/tasks/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const myTasksApi = { mytasksApi };

export default myTasksApi;
