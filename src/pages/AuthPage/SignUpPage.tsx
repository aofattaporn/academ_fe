import { Link } from "react-router-dom";
import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";
import { labels, placeholders } from "../../types/AuthType";
import { Alert } from "@mui/material";
import useSignUpForm from "../../hooks/useSignUpForm";

const SignUpPage = () => {
  const { handleSubmit, onSubmit, register, errors, mutation } =
    useSignUpForm();

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
