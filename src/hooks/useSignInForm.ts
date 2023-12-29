import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import authApi from "../libs/authApi";
import { SignInSchema, signInSchema, SignInType } from "../types/AuthType";
import { ErrorCustom } from "../types/GenericType";

// Custom hook for the sign-in form logic
const useSignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) });

  const mutation = useMutation({
    mutationFn: authApi.signInApi,
    onSuccess: (res: SignInType) => console.log(res),
    onError: (error: ErrorCustom) => console.error(error.message),
  });

  const onSubmit: SubmitHandler<SignInSchema> = (data) => mutation.mutate(data);

  return { handleSubmit, register, errors, onSubmit, mutation };
};

export default useSignInForm;
