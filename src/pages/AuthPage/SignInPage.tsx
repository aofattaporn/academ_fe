import TextFieldComp from "../../components/TextFieldComp";
import AuthButtonComp from "../../components/Button/AuthButtonComp";
import GoogleButtonComp from "../../components/Button/GoogleButtonComp";

const SignInPage = () => {
  return (
    <div className="bg-white py-12 px-24  rounded-md flex-col space-y-7 align-middle justify-center shadow-md">
      <div className="flex justify-center w-[492px]">
        <h1 className="text-3xl font-semibold">Welcome back !</h1>
      </div>

      <div>
        <TextFieldComp label="Email" placeholder="Input your Email" />
      </div>

      <div>
        <TextFieldComp label="Password" placeholder="Input your Password" />
        <a className="text-primary text-sm">forgot password</a>
      </div>

      <AuthButtonComp title="Get Start" />
      <GoogleButtonComp />
    </div>
  );
};

export default SignInPage;
