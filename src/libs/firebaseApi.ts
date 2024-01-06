import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  ErrorCustom,
  RESPONSE_AUTH_ERROR,
  RESPONSE_TRY_AGAIN_LATHER,
} from "../types/GenericType";

const createUser = async (email: string, password: string) => {
  const app = getAuth();
  return await createUserWithEmailAndPassword(app, email, password);
};

const signInUser = async (email: string, password: string) => {
  const app = getAuth();
  return await signInWithEmailAndPassword(app, email, password);
};

const removeUser = async () => {
  const app = getAuth();
  const user = app.currentUser;

  if (user) {
    await user.delete();
  }
};

const signOutUser = async () => {
  const app = getAuth();
  await app.signOut();
};

const checkError = (errorMsg: string): ErrorCustom | null => {
  const customErr: ErrorCustom = {
    message: RESPONSE_AUTH_ERROR,
    description: RESPONSE_TRY_AGAIN_LATHER,
  };

  const authErrorMap: Record<string, string> = {
    "auth/email-already-in-use": "The email address is already in use",
    "auth/invalid-email": "The email address is not valid.",
    "auth/operation-not-allowed": "Operation not allowed.",
    "auth/weak-password": "The password is too weak.",
  };

  const errorCode = Object.keys(authErrorMap).find((code) => {
    if (errorMsg.toString().includes(code)) return code;
  });

  if (errorCode) {
    customErr.message = RESPONSE_AUTH_ERROR;
    customErr.description = authErrorMap[errorCode as string];

    return customErr;
  } else {
    return null;
  }
};

const firebaseApi = {
  createUser,
  signInUser,
  checkError,
  removeUser,
  signOutUser,
};

export default firebaseApi;
