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
  const createProject = useSelector((state: RootState) => state.createProject);
  const currentStepData = stepCreateProject[createProject.currentStep];
  const dispatch = useDispatch();
  const handleNextStep = (step: number) => {
    dispatch(selectStep(step));
  };

  return (
    <div className="my-20 mx-4 md:mx-40 rounded-md">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">Published Classes</h1>

            <IconButton onClick={() => dispatch(openCreateProjectModal())}>
              <QueueIcon />
            </IconButton>
            <CreateModalComp
              isOpen={createProject.isOpen}
              title={currentStepData.title}
              component={currentStepData.component}
              maxStep={createProject.maxStep}
              step={createProject.step}
              currentStep={createProject.currentStep}
              handleSelectStep={handleNextStep}
              handleReset={() => dispatch(reset())}
            />
          </div>
          <h4 className="text-gray-300">
            These classes are available to students.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
