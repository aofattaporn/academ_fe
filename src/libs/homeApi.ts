import { ProjectType } from "../types/HomeType";
import axiosInstance from "./axiosInstance";

const projectApi = async ( projectId: string ): Promise<ProjectType> => {
    const response = await axiosInstance.post(`api/v1/project/${projectId}`);
    return response.data;
  };
  
  const homeApi = { projectApi };
  
  export default homeApi;