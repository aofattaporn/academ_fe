import { IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import { useDispatch, useSelector } from "react-redux";
import {
  openCreateProjectModal,
  reset,
  selectStep,
} from "../../stores/createProject/createProjectSlice";
import CreateModalComp from "../../components/CreateModal/CreateModalComp";
import { RootState } from "../../stores/store";
import { stepCreateProject } from "../../types/ProjectType";

const ProjectPage = () => {
  const createStore = useSelector((state: RootState) => state.createProject);
  const currentStepCreate = stepCreateProject[createStore.currentStep];
  const dispatch = useDispatch();

  return (
    <div className="my-20 mx-4 md:mx-40 rounded-md">
      <div>
        <div className="flex gap-4 items-center">
          <h1 className="text-xl font-bold">Published Project</h1>
          <IconButton onClick={() => dispatch(openCreateProjectModal())}>
            <QueueIcon />
          </IconButton>
          <CreateModalComp
            isOpen={createStore.isOpen}
            maxStep={createStore.maxStep}
            step={createStore.step}
            currentStep={createStore.currentStep}
            title={currentStepCreate.title}
            component={currentStepCreate.component}
            handleSelectStep={(step: number) => dispatch(selectStep(step))}
            handleReset={() => dispatch(reset())}
          />
        </div>
        <h4 className="text-gray-300">These projects are available.</h4>
      </div>
    </div>
  );
};

export default ProjectPage;
