import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import authApi from "../libs/authApi";
import { SignInSchema, signInSchema, SignInType } from "../types/AuthType";
import { ErrorCustom, RESPONSE_AUTH_ERROR } from "../types/GenericType";
import firebaseApi from "../libs/firebaseApi";

// Custom hook for the sign-in form logic
const useSignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) });

  const signInHander = async (data: SignInSchema) => {
    try {
      const userCredential = await firebaseApi.signInUser(
        data.email,
        data.password
      );
      const tokenID = await userCredential.user.getIdToken();
      await authApi.signInApi(tokenID);
    } catch (error) {
      const errorMsg: string = (error as string).toString();
      const customError = await firebaseApi.checkError(errorMsg.toString());

      if (customError && customError.message === RESPONSE_AUTH_ERROR) {
        throw customError;
      } else {
        await firebaseApi.signOutUser();
        throw error;
      }
    }
  };
  const mutation = useMutation({
    mutationFn: signInHander,
    onSuccess: () => console.log("signIn-user"),
    onError: (error: ErrorCustom) => console.error(error.message),
  });

  const onSubmit: SubmitHandler<SignInSchema> = (data) => mutation.mutate(data);

  return { handleSubmit, register, errors, onSubmit, mutation };
};

export default useSignInForm;
