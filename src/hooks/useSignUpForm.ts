import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import authApi from "../libs/authApi";
import {
  SignUpRequestType,
  SignUpSchema,
  signUpSchema,
} from "../types/AuthType";
import { ErrorCustom, RESPONSE_AUTH_ERROR } from "../types/GenericType";
import firebaseApi from "../libs/firebaseApi";

const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const signUpHandler = async (data: SignUpSchema) => {
    try {
      const userCredential = await firebaseApi.createUser(
        data.email,
        data.password
      );
      const tokenID = await userCredential.user.getIdToken();

      const registerData: SignUpRequestType = {
        fullName: data.fullName,
        email: data.email,
      };

      await authApi.signUpApi(registerData, tokenID);
    } catch (error) {
      const errorMsg: string = (error as string).toString();
      const customError = await firebaseApi.checkError(errorMsg.toString());

      if (customError && customError.message === RESPONSE_AUTH_ERROR) {
        throw customError;
      } else {
        await firebaseApi.removeUser();
        throw error;
      }
    }
  };

  const mutation = useMutation({
    mutationFn: signUpHandler,
    onError: (error: ErrorCustom) => console.error(error.message),
  });

  const onSubmit: SubmitHandler<SignUpSchema> = (data) => mutation.mutate(data);

  return { register, handleSubmit, onSubmit, errors, mutation };
};

export default useSignUpForm;
