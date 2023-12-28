import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInSchema,
  SignInType,
  labels,
  placeholders,
  signInSchema,
} from "../../types/AuthType";
import { useMutation } from "react-query";
import { Alert } from "@mui/material";
import { ErrorCustom } from "../../types/GenericType";
import authApi from "../../libs/authApi";

const SignInPage = () => {
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

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white py-12 px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md"
      >
        <div className="flex justify-center w-[492px]">
          <h1 className="text-3xl font-semibold">Welcome back !</h1>
        </div>
        <div>
          <TextFieldComp
            {...register("email")}
            label={labels.email}
            placeholder={placeholders.email}
            errors={errors.email?.message}
          />
        </div>

        <div>
          <TextFieldComp
            {...register("password")}
            label={labels.password}
            placeholder={placeholders.password}
            errors={errors.password?.message}
          />
          <Link to={"/forgot-password"} className="text-primary text-sm">
            forgot password
          </Link>
        </div>

        <div className="flex-col space-y-4">
          {mutation.isError ? (
            <Alert severity="error">{mutation.error.description}</Alert>
          ) : null}
          <AuthButtonComp title="Get Start" />
          <GoogleButtonComp />
        </div>
      </form>

      <div className="w-full flex justify-center m-4">
        <Link to={"/sign-up"}>SignUp Page</Link>
      </div>
    </div>
  );
};

export default SignInPage;
