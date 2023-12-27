import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignInSchema,
  labels,
  placeholders,
  signInSchema,
} from "../../types/AuthType";
import { useMutation } from "react-query";
import { ErrorCustom, signInApi } from "../../libs/authApi";
import { Alert } from "@mui/material";
import { useState } from "react";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({ resolver: zodResolver(signInSchema) });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mutation = useMutation({
    mutationFn: signInApi,
    onSuccess: () => console.log("sign-in-success"),
    onError(error: ErrorCustom) {
      console.log(error.message);
      setErrorMessage(error.message);
    },
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
          <a className="text-primary text-sm">forgot password</a>
        </div>

        <div className="flex-col space-y-4">
          {mutation.isError ? (
            <Alert severity="error">{errorMessage}</Alert>
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
