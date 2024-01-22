import { styled, Button } from "@mui/material";

type CreateProjectButtonProps = {
  title: string;
  disable: boolean;
  handleChange: () => void;
};

const CreateProjectButton = styled(Button)({
  background:
    "linear-gradient(90deg, rgba(215,128,225,1) 0%, rgba(174,120,214,1) 59%, rgba(147,121,224,1) 100%)",
  color: "#FFFFFF",
  boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
  "&:hover": {
    background:
      "linear-gradient(90deg, rgba(215,128,225,1) 0%, rgba(174,120,214,1) 59%, rgba(147,121,224,1) 100%)",
    color: "#FFFFFF",
    boxShadow: "0px 4px 12px 0px rgba(99, 99, 99, 0.4)",
  },
  "&:disabled": {
    background: "#F1EAFF",
    color: "#BDBDBD",
    boxShadow: "none",
  },
});

const CreateProjectButtonComp = ({
  title,
  disable,
  handleChange,
}: CreateProjectButtonProps) => {
  return (
    <div className="w-full flex justify-center">
      <CreateProjectButton type="submit" fullWidth disabled={disable}>
        {title}
      </CreateProjectButton>
    </div>
  );
};

export default CreateProjectButtonComp;
