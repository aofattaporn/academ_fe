import { ResponseCustom } from "../types/GenericType";
import { UserType } from "../types/UserType";
import axiosInstance from "./axiosInstance";

const signInApi = async (tokenID: string): Promise<ResponseCustom<null>> => {
  const response = await axiosInstance.post(
    "api/v1/sign-in",
    {},
    {
      headers: {
        Authorization: `Bearer ${tokenID}`,
      },
    }
  );
  return response.data;
};

const signUpApi = async (
  form: UserType,
  token: string
): Promise<ResponseCustom<null>> => {
  const response = await axiosInstance.post("api/v1/sign-up", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const signInWithGoogle = async (
  form: UserType,
  token: string
): Promise<ResponseCustom<null>> => {
  const response = await axiosInstance.post("api/v1/sign-in/google", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const authApi = { signInApi, signUpApi, signInWithGoogle };

export default authApi;
