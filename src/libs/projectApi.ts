import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { ResponseCustom } from "../types/GenericType";
import { ProjectRequestType } from "../types/ProjectType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";
import { saveUser } from "../stores/user/userSlice";

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
