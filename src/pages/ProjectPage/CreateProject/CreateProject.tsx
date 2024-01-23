import { Backdrop, IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import StepAddName from "./StepProject/StepAddName";
import StepSettingViews from "./StepProject/StepSettingViews";
import ButtletStep from "./BulletStep/ButtletStep";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import {
  openModal,
  reset,
} from "../../../stores/createProject/createProjectSlice";

const CreateProject = () => {
  const dispatch = useDispatch();
  const createProject = useSelector((state: RootState) => state.createProject);

  return (
    <>
      <IconButton onClick={() => dispatch(openModal())}>
        <QueueIcon />
      </IconButton>
      <Backdrop open={createProject.isOpen}>
        <div className="bg-white rounded-md w-full h-full md:h-auto md:w-2/4  ml-20 md:ml-0 p-4 md:p-8">
          {createProject.currentStep == 1 ? (
            <StepAddName title="Project Name" />
          ) : null}
          {createProject.currentStep == 2 ? (
            <StepSettingViews title="Project Setting Views" />
          ) : null}

          <ButtletStep />
        </div>
      </Backdrop>
    </>
  );
};

export default CreateProject;
