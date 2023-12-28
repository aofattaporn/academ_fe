import {
  SignInSchema,
  SignInType,
  SignUpSchema,
  SignUpType,
} from "../types/AuthType";
import axiosInstance from "./axiosInstance";

const signInApi = async (form: SignInSchema): Promise<SignInType> => {
  try {
    const response = await axiosInstance.post("api/sign-in", form);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const signUpApi = async (form: SignUpSchema): Promise<SignUpType> => {
  try {
    const response = await axiosInstance.post("api/sign-up", form);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const authApi = { signInApi, signUpApi };

export default authApi;
