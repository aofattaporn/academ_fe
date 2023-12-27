import { AxiosResponse } from "axios";
import { SignInSchema, SignInType } from "../types/AuthType";
import axiosInstance from "./axiosInstance";
export type ErrorCustom = {
  message: string;
};
export const signInApi = async (form: SignInSchema): Promise<SignInType> => {
  try {
    const response = await axiosInstance.post("api/sign-in", form);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getApi = () => {
  const response: Promise<AxiosResponse> = axiosInstance.get("/api/sign-in");
  return response;
};
