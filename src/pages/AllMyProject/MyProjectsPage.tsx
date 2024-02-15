import { IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import { useDispatch, useSelector } from "react-redux";
import CreateModalComp from "../../components/CreateModal/CreateModalComp";
import { RootState } from "../../stores/store";
import { stepCreateProject } from "../../types/ProjectType";
import {
  openModal,
  resetState,
  setCurrentStep,
} from "../../stores/projectSlice/createProjectSlice";
import ProjectBox from "./ProjectBox/ProjectBox";

const MyProjectsPage = () => {
  const createStore = useSelector((state: RootState) => state.createProject);
  const currentStepCreate = stepCreateProject[createStore.currentStep];
  const dispatch = useDispatch();

  return (
    <div className="my-20 mx-4 md:mx-40 rounded-md">
      <div>
        <div className="flex gap-4 items-center">
          <h1 className="text-xl font-bold">Published Project</h1>
          <IconButton onClick={() => dispatch(openModal())}>
            <QueueIcon />
          </IconButton>
          <CreateModalComp
            isOpen={createStore.isModalOpen}
            maxStep={createStore.totalSteps}
            step={createStore.currentStep}
            currentStep={createStore.currentStep}
            title={currentStepCreate.title}
            component={currentStepCreate.component}
            handleSelectStep={(step: number) => dispatch(setCurrentStep(step))}
            handleReset={() => dispatch(resetState())}
          />
        </div>
        <h4 className="text-gray-300">These projects are available.</h4>
        <div className="w-full my-8 grid lg:grid-cols-3 grid-cols-1 gap-8">
          <ProjectBox
            projectName="Academ"
            avatarColor="#AF8AE2"
            membersCounts={4}
            projectEndDate={new Date()}
          />
          <ProjectBox
            projectName="JitD"
            avatarColor="#6985FF"
            membersCounts={2}
            projectEndDate={new Date()}
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjectsPage;
