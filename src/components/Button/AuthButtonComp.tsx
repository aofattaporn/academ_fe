import { Button, styled } from "@mui/material";

type AuthButtonCompProps = {
  title: string;
};

const AuthButton = styled(Button)({
  background:
    "linear-gradient(90deg, rgba(215,128,225,1) 0%, rgba(174,120,214,1) 59%, rgba(147,121,224,1) 100%)",
  color: "#FFFFFF",
  boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(215,128,225,1) 0%, rgba(174,120,214,1) 59%, rgba(147,121,224,1) 100%)",
    color: "#FFFFFF",
    boxShadow: "0px 4px 12px 0px rgba(99, 99, 99, 0.4)", // Adjust the hover box shadow
  },
});

const AuthButtonComp = ({ title }: AuthButtonCompProps) => {
  return (
    <div className="w-full flex justify-center">
      <AuthButton type="submit" fullWidth>
        {title}
      </AuthButton>
    </div>
  );
};

export default AuthButtonComp;
