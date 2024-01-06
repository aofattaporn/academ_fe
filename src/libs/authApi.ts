import { SignInType, SignUpRequestType } from "../types/AuthType";
import { ResponseCustom } from "../types/GenericType";
import axiosInstance from "./axiosInstance";

const signInApi = async (
  tokenID: string
): Promise<ResponseCustom<SignInType>> => {
  const response = await axiosInstance.post(
    "api/sign-in",
    {},
    {
      headers: {
        Authorization: `Bearer ${tokenID}`,
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

const signUpApi = async (
  form: SignUpRequestType,
  token: string
): Promise<null> => {
  const response = await axiosInstance.post("api/v1/sign-up", form, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

const authApi = { signInApi, signUpApi };

export default authApi;
