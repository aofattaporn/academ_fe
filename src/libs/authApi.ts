import {
  SignInSchema,
  SignInType,
  SignUpRequestType,
  SignUpSchema,
  SignUpType,
} from "../types/AuthType";
import {
  ErrorCustom,
  RESPONSE_AUTH_ERROR,
  RESPONSE_INTERNAL_SERVER_ERROR,
  RESPONSE_TRY_AGAIN_LATHER,
} from "../types/GenericType";
import axiosInstance from "./axiosInstance";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const signInApi = async (form: SignInSchema): Promise<SignInType> => {
  try {
    const app = getAuth();
    const tokenID = await (
      await signInWithEmailAndPassword(app, form.email, form.password)
    ).user.getIdToken();

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
  } catch (error) {
    const errorStr = error as string;
    const customErr = checkErrorSignUp(errorStr);

    throw customErr;
  }
};

const signUpApi = async (form: SignUpSchema): Promise<SignUpType> => {
  try {
    const app = getAuth();
    const tokenID = await (
      await createUserWithEmailAndPassword(app, form.email, form.password)
    ).user.getIdToken();

    const regiter: SignUpRequestType = {
      fullName: form.fullName,
      email: form.email,
    };

    const response = await axiosInstance.post("api/v1/sign-up", regiter, {
      headers: {
        Authorization: `Bearer ${tokenID}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const errorStr = error as string;
    const customErr = checkErrorSignUp(errorStr);

    throw customErr;
  }
};

const checkErrorSignUp = (errorMsg: string): ErrorCustom => {
  const customErr: ErrorCustom = {
    message: RESPONSE_INTERNAL_SERVER_ERROR,
    description: RESPONSE_TRY_AGAIN_LATHER,
  };

  if (errorMsg.toString().includes("auth/email-already-in-use")) {
    (customErr.message = RESPONSE_AUTH_ERROR),
      (customErr.description = "The email address is already in use");
  } else if (errorMsg.toString().includes("auth/invalid-email")) {
    (customErr.message = RESPONSE_AUTH_ERROR),
      (customErr.description = "The email address is not valid.");
    throw customErr;
  } else if (errorMsg.toString().includes("auth/operation-not-allowed")) {
    (customErr.message = RESPONSE_AUTH_ERROR),
      (customErr.description = "Operation not allowed.");
  } else if (errorMsg.toString().includes("auth/weak-password")) {
    (customErr.message = RESPONSE_AUTH_ERROR),
      (customErr.description = "The password is too weak.");
  }

  return customErr;
};

const authApi = { signInApi, signUpApi };

export default authApi;
