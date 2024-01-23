import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

type StepProjectHeaderProps = {
  title: string;
  handleClose: () => void;
};

const StepProjectHeader = ({ title, handleClose }: StepProjectHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-dark font-bold text-xl">{title}</h1>
      <IconButton onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default StepProjectHeader;
