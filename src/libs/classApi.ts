import { Class, ListClass } from "../types/ClassType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const getAllClass = async (): Promise<ListClass[]> => {
    try {
      const token = await firebaseApi.getToken();
      const response = await axiosInstance.get("/api/v1/class/users/id", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching class:", error);
      throw error;
    }
  };

const getClass = async (classId: string): Promise<Class> => {
    try {
      const token = await firebaseApi.getToken();
      const response = await axiosInstance.get(`/api/v1/class/${classId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching class:", error);
      throw error;
    }
  };

const classApi = {getAllClass,getClass};

export default classApi;