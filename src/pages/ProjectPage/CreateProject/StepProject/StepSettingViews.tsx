import { IconButton } from "@mui/material";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import CloseIcon from "@mui/icons-material/Close";

type StepSettingViewsProps = {
  handleClose: () => void;
  handleChange: () => void;
};
function StepSettingViews({
  handleClose,
  handleChange,
}: StepSettingViewsProps) {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-dark font-bold text-xl">Project Name</h1>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className="bg-main mt-6 p-8"></div>

      <div className="bg-main mt-6" onClick={handleChange}>
        <CreateProjectButtonComp
          title="Next"
          disable={false}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default StepSettingViews;
