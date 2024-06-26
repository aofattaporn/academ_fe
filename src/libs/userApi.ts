import { requestNotificationPermission } from "../Firebase";
import { UserType } from "../types/UserType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const getUserApi = async (): Promise<UserType> => {
  try {
    const token = await firebaseApi.getToken();
    const fcmToeken = await requestNotificationPermission();
    const response = await axiosInstance.get("api/v1/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        FCM_TOEKN: fcmToeken,
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

const userApi = { getUserApi };

export default userApi;
