import { Link } from "react-router-dom";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import TextFieldComp from "../../components/TextFieldComp";
import { placeholders } from "../../types/AuthType";
import useForgotForm from "../../hooks/useForgotForm";

function ForgotPasswordPage() {
  const { handleSubmit, register, errors, onSubmit, mutation } =
    useForgotForm();

  return (
    <div className="w-6/6 md:w-3/6">
      <form
        className="bg-white py-12 px-12 md:px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold">Forgot your password</h1>
        </div>
        <p className="text-center">
          Please enter the email address you'd like your password reset
          information sent to
        </p>
        <div>
          <TextFieldComp
            {...register("email", { required: true })}
            inputId="email"
            placeholder={placeholders.email}
            errors={errors.email?.message}
            isPassword={false}
          />
        </div>
        <div className="flex-col space-y-4">
          <AuthButtonComp title="Request reset links" />
        </div>
        {mutation.isSuccess && (
          <div className="flex justify-center text-primary-light">
            <p>Already send !!!</p>
          </div>
        )}
      </form>
      <div className="w-full flex justify-center m-4">
        <p>
          Back to{" "}
          <Link className="font-bold" to="/sign-in">
            Sign In Page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
