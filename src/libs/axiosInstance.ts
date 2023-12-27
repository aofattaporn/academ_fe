import axios, { AxiosError, AxiosResponse } from "axios";
import { ErrorCustom } from "./authApi";

const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    console.log(response.status);

    if (response.status === 500) {
      // Attach additional information to the error, if needed
      const error = new Error("Error 500 !!!!");
      // error.message = response; // Attach the original response for reference
      console.error("Custom 500 Error:", response.data);
      throw error;
    } else if (response.status === 401) {
      const error = new Error("Error 401 !!!!");
      // error.response = response;
      console.error("Custom 401 Error:", response.data);
      throw error;
    }

    // Return the response if no error occurred
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const customErr: ErrorCustom = { message: "Something went wrong" };
      return Promise.reject(customErr);
    } else {
      const customErr: ErrorCustom = { message: "Try agian Lather" };
      return Promise.reject(customErr);
    }
  }
);

export default axiosInstance;
