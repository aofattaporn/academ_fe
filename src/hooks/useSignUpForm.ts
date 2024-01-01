import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import authApi from "../libs/authApi";
import { SignUpSchema, signInSchema } from "../types/AuthType";
import { ErrorCustom } from "../types/GenericType";

const useSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({ resolver: zodResolver(signInSchema) });
  const mutation = useMutation({
    mutationFn: authApi.signUpApi,
    onSuccess: (res: SignUpSchema) => console.log(res),
    onError: (error: ErrorCustom) => console.error(error.message),
  });
  const onSubmit: SubmitHandler<SignUpSchema> = (data) => mutation.mutate(data);

  return { register, handleSubmit, errors, onSubmit, mutation };
};

export default useSignUpForm;
