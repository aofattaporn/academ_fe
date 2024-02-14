import { MytaskType } from "../types/MyTasksType";
import axiosInstance from "./axiosInstance";

const mytasksApi = async (): Promise<MytaskType> => {
  const response = await axiosInstance.get(`api/v1/projects/tasks/users`);
  console.log(response.data.data);
  return response.data.data;
};


const myTasksApi = { mytasksApi };

export default myTasksApi;
