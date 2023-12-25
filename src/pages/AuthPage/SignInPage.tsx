import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type SignInProps = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const { register, handleSubmit } = useForm<SignInProps>();

  const onSubmit: SubmitHandler<SignInProps> = (data) => console.log(data);

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
            label="Email"
            placeholder="Input your Email"
          />
        </div>

        <div>
          <TextFieldComp
            {...register("password")}
            label="Password"
            placeholder="Input your Password"
          />
          <a className="text-primary text-sm">forgot password</a>
        </div>

        <AuthButtonComp title="Get Start" />
        <GoogleButtonComp />
      </form>

      <div className="w-full flex justify-center m-4">
        <Link to={"/sign-up"}>SignUp Page</Link>
      </div>
    </div>
  );
};

export default SignInPage;
