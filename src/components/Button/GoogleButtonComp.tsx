import { Button } from "@mui/material";

const GoogleButtonComp = () => {
  return (
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
  );
};

export default GoogleButtonComp;
