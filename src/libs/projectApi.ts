import { useDispatch, useSelector } from "react-redux";
import { ResponseCustom } from "../types/GenericType";
import { ProjectList, ProjectRequestType } from "../types/ProjectType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";
import { RootState } from "../stores/store";

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

const getAllProject = async (
  projects: ProjectList[]
): Promise<ProjectList[]> => {
  if (projects.length) {
    return projects;
  } else {
    try {
      const token = await firebaseApi.getToken();
      const response = await axiosInstance.get("api/v1/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }
};

const projectApi = { createProject, getAllProject };

export default projectApi;
function useAppSelector(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
