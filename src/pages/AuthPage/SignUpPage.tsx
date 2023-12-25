import { Link } from "react-router-dom";
import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white py-12 px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md"
      >
        <div className="flex justify-center w-[492px]">
          <h1 className="text-3xl font-semibold">Let’s go!</h1>
        </div>

        <div>
          <TextFieldComp
            {...register("fullName")}
            label="Full Name"
            placeholder="Input your Full Name"
          />
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
        </div>

        <AuthButtonComp title="Get Start" />
        <GoogleButtonComp />
      </form>

      <div className=" w-full flex justify-center m-4">
        <Link to={"/sign-in"}>SignIn Page</Link>
      </div>
    </div>
  );
};

export default SignUpPage;
