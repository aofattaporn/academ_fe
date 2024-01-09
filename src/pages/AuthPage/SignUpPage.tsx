import { Link, Navigate } from "react-router-dom";
import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import { labels, placeholders } from "../../types/AuthType";
import { Alert, Backdrop, CircularProgress } from "@mui/material";
import useSignUpForm from "../../hooks/useSignUpForm";

const SignUpPage = () => {
  const { handleSubmit, onSubmit, register, errors, mutation } =
    useSignUpForm();

  if (mutation.isLoading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  if (mutation.isSuccess) return <Navigate to={"/verify-email"} replace />;

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
            inputId="fullName"
            label={labels.fullName}
            placeholder={placeholders.fullName}
            errors={errors.fullName?.message}
            isPassword={false}
          />
        </div>
        <div>
          <TextFieldComp
            {...register("email", { required: true })}
            inputId="email"
            label={labels.email}
            placeholder={placeholders.email}
            errors={errors.email?.message}
            isPassword={false}
          />
        </div>
        <div>
          <TextFieldComp
            {...register("password", { required: true })}
            inputId="password"
            label={labels.password}
            placeholder={placeholders.password}
            errors={errors.password?.message}
            isPassword={true}
          />
        </div>
        <div className="flex-col space-y-4">
          {mutation.isError ? (
            <Alert severity="error">{mutation.error.description}</Alert>
          ) : null}
          {mutation.isSuccess ? (
            <Alert severity="success">{"SignUp success"}</Alert>
          ) : null}
          <AuthButtonComp title="Get Start" />
        </div>
      </form>

      <div className=" w-full flex justify-center m-4">
        <p>
          Don't have an account?{" "}
          <Link className="font-bold" to="/sign-in">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
