import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import { Link, Navigate } from "react-router-dom";
import { labels, placeholders } from "../../types/AuthType";
import { Alert, Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import useSignInForm from "../../hooks/useSignInForm";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";

const SignInPage = () => {
  const { handleSubmit, register, errors, onSubmit, mutation } =
    useSignInForm();

  if (mutation.isLoading)
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );

  if (mutation.isSuccess) return <Navigate to={"/"} />;

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-main md:bg-white py-12 px-24 rounded-md flex-col space-y-7 align-middle justify-center md:shadow-md"
      >
        <div className="flex justify-center w-[492px]">
          <h1 className="text-3xl font-semibold">Welcome back !</h1>
        </div>
        <div>
          <TextFieldComp
            {...register("email")}
            inputId="email"
            label={labels.email}
            placeholder={placeholders.email}
            errors={errors.email?.message}
            isPassword={false}
          />
        </div>

        <div>
          <TextFieldComp
            {...register("password")}
            inputId="password"
            label={labels.password}
            placeholder={placeholders.password}
            errors={errors.password?.message}
            isPassword={true}
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
        <p>
          Dont have a account? go to{" "}
          <Link className="font-bold" to={"/sign-up"}>
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
