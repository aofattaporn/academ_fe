import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

type StepProjectHeaderProps = {
  title: string;
  handleReset: () => void;
};

const CreateHeader = ({ title, handleReset }: StepProjectHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-dark font-bold text-xl">{title}</h1>
      <IconButton onClick={handleReset}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default CreateHeader;
