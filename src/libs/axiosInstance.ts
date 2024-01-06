import axios, { AxiosError, AxiosResponse } from "axios";
import {
  ErrorCustom,
  HTTP_STATUS_UNAUTHORIZED,
  RESPONSE_INTERNAL_SERVER_ERROR,
  RESPONSE_TRY_AGAIN_LATHER,
  ResponseCustom,
} from "../types/GenericType";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ResponseCustom<any>>) => {
    return response;
  },
  (error: AxiosError<ErrorCustom>) => {
    if (error.response?.status === HTTP_STATUS_UNAUTHORIZED) {
      const err: ErrorCustom = error.response.data;
      const customErr: ErrorCustom = {
        message: err.message,
        description: err.description,
      };
      return Promise.reject(customErr);
    } else {
      const customErr: ErrorCustom = {
        message: RESPONSE_INTERNAL_SERVER_ERROR,
        description: RESPONSE_TRY_AGAIN_LATHER,
      };
      return Promise.reject(customErr);
    }
  }
);

export default axiosInstance;
