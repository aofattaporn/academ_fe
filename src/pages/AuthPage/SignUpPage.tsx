import { Link } from "react-router-dom";
import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  SignUpSchema,
  labels,
  placeholders,
  signInSchema,
} from "../../types/AuthType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import authApi from "../../libs/authApi";
import { ErrorCustom } from "../../types/GenericType";
import { Alert } from "@mui/material";

const SignUpPage = () => {
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

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white py-12 px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md"
      >
        <div className="flex justify-center w-[492px]">
          <h1 className="text-3xl font-semibold">Let go!</h1>
        </div>
        <div>
          <TextFieldComp
            {...register("fullName", { required: true })}
            label={labels.fullName}
            placeholder={placeholders.fullName}
            errors={errors.fullName?.message}
          />
        </div>
        <div>
          <TextFieldComp
            {...register("email", { required: true })}
            label={labels.email}
            placeholder={placeholders.email}
            errors={errors.email?.message}
          />
        </div>
        <div>
          <TextFieldComp
            {...register("password", { required: true })}
            label={labels.password}
            placeholder={placeholders.password}
            errors={errors.password?.message}
          />
        </div>
        <div className="flex-col space-y-4">
          {mutation.isError ? (
            <Alert severity="error">{mutation.error.description}</Alert>
          ) : null}
          <AuthButtonComp title="Get Start" />
          <GoogleButtonComp />
        </div>
      </form>

      <div className=" w-full flex justify-center m-4">
        <Link to={"/sign-in"}>SignIn Page</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
