import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { reset } from "../../../../stores/createProject/createProjectSlice";
import { useDispatch } from "react-redux";

type StepProjectHeaderProps = {
  title: string;
};

const StepProjectHeader = ({ title }: StepProjectHeaderProps) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-dark font-bold text-xl">{title}</h1>
      <IconButton onClick={() => dispatch(reset())}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default StepProjectHeader;
