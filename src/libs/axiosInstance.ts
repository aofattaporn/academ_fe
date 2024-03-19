import axios, { AxiosError, AxiosResponse } from "axios";
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_FORBIDDEN,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_REQUES_TIME_OUT,
  HTTP_STATUS_UNAUTHORIZED,
  RESPONSE_INTERNAL_SERVER_ERROR,
  RESPONSE_TRY_AGAIN_LATHER,
  ResponseCustom,
  STATUS_CODE_1899,
  STATUS_CODE_1999,
} from "../types/GenericType";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<ResponseCustom<any>>) => {
    if (response.data.status === STATUS_CODE_1899) {
      const customErr: ResponseCustom<null> = {
        status: response.data.status,
        message: response.data.message,
        description: response.data.description,
      };
      return Promise.reject(customErr);
    }

    if (response.data.status === STATUS_CODE_1999) {
      const customErr: ResponseCustom<null> = {
        status: response.data.status,
        message: response.data.message,
        description: response.data.description,
      };
      return Promise.reject(customErr);
    }

    return response;
  },

  (error: AxiosError<ResponseCustom<null>>) => {
    // define error variable
    const errResponse = error.response as AxiosResponse<ResponseCustom<null>>;

    if (error.code === "ERR_NETWORK") {
      const customErr: ResponseCustom<null> = {
        status: 500,
        message: RESPONSE_INTERNAL_SERVER_ERROR,
        description: RESPONSE_TRY_AGAIN_LATHER,
      };
      return Promise.reject(customErr);
    }

    const errData = errResponse.data as ResponseCustom<null>;

    const customErr: ResponseCustom<null> = {
      status: errData.status,
      message: errData.message,
      description: errData.description,
    };

    if (customErr.status === STATUS_CODE_1899) {
      return Promise.reject(customErr);
    }

    if (customErr.status === STATUS_CODE_1999) {
      return Promise.reject(customErr);
    }

    // case - 401 unauthorized
    if (customErr.status === HTTP_STATUS_UNAUTHORIZED) {
      return Promise.reject(customErr);
    }

    // case - 401 unauthorized
    else if (customErr.status === HTTP_STATUS_BAD_REQUEST) {
      return Promise.reject(customErr);
    }

    // case - 403 not found
    else if (customErr.status === HTTP_STATUS_FORBIDDEN) {
      return Promise.reject(customErr);
    }

    // case - 404 not found
    else if (customErr.status === HTTP_STATUS_NOT_FOUND) {
      return Promise.reject(customErr);
    }

    // case - 404 not found
    else if (customErr.status === HTTP_STATUS_REQUES_TIME_OUT) {
      return Promise.reject(customErr);
    }
    // case - 500 unauthorized
    else {
      const customErr: ResponseCustom<null> = {
        status: 500,
        message: RESPONSE_INTERNAL_SERVER_ERROR,
        description: RESPONSE_TRY_AGAIN_LATHER,
      };
      return Promise.reject(customErr);
    }
  }
);

export default axiosInstance;
