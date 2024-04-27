import { ErrorCustom } from "../types/GenericType";
import { Notification } from "../types/NotificationType";
import axiosInstance from "./axiosInstance";
import firebaseApi from "./firebaseApi";

const getAllNotification = async (): Promise<Notification[]> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(`/api/v1/notifications`, {
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

const updateClearNotification = async (notiId: string): Promise<null> => {
  try {
    const token = await firebaseApi.getToken();
    const response = await axiosInstance.get(
      `/api/v1/notifications/${notiId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    const errorCustom = error as ErrorCustom;
    console.error("Error cant to update permission :", errorCustom.description);
    throw errorCustom;
  }
};

const notificationApi = { getAllNotification, updateClearNotification };

export default notificationApi;
