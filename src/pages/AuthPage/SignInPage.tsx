import { Button } from "@mui/material";
import TextFieldComp from "../../components/TextFieldComp";

const SignInPage = () => {
  return (
    <div className="bg-white py-12 px-24 rounded-md flex-col space-y-7 align-middle justify-center shadow-md">
      <div className=" w-full flex justify-center">
        <h1 className="text-3xl font-semibold">Welcome back !</h1>
      </div>

      <div className="w-96">
        <TextFieldComp label="Email" placeholder="Input your Email" />
      </div>

      <div className="w-96 ">
        <TextFieldComp label="Password" placeholder="Input your Password" />
        <a className=" text-primary text-sm">forgot password</a>
      </div>

      <div className="w-full flex justify-center">
        <Button
          fullWidth
          sx={{
            backgroundColor: "#AF8AE2",
            color: "#FFFFFF",
          }}
        >
          Get Start
        </Button>
      </div>

      <div className="w-full flex justify-center">
        <Button
          fullWidth
          className="shadow-md normal-case"
          sx={{
            textTransform: "capitalize",
            color: "#004FC4",
          }}
        >
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
