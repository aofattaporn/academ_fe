import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "react-query";
import firebaseApi from "../libs/firebaseApi";
import { ForgotSchema, forgotSchema } from "../types/AuthType";
import { RESPONSE_AUTH_ERROR } from "../types/GenericType";

const useForgotForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotSchema>({ resolver: zodResolver(forgotSchema) });

  const forgotPasswordSubmit = async (data: ForgotSchema) => {
    try {
      await firebaseApi.resetPasswordByEmail(data.email);
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
    mutationFn: forgotPasswordSubmit,
  });

  const onSubmit: SubmitHandler<ForgotSchema> = (data) => mutation.mutate(data);

  return { handleSubmit, register, errors, onSubmit, mutation };
};

export default useForgotForm;
