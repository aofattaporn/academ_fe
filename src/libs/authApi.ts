import {
  SignInSchema,
  SignInType,
  SignUpSchema,
  SignUpType,
} from "../types/AuthType";
import axiosInstance from "./axiosInstance";

const signInApi = async (form: SignInSchema): Promise<SignInType> => {
  const response = await axiosInstance.post("api/sign-in", form);
  return response.data;
};

const signUpApi = async (form: SignUpSchema): Promise<SignUpType> => {
  const response = await axiosInstance.post("api/sign-up", form);
  return response.data;
};

const authApi = { signInApi, signUpApi };

export default authApi;
