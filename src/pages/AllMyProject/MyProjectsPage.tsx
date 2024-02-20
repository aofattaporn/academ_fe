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
import { useState } from "react";

const MyProjectsPage = () => {
  const createStore = useSelector((state: RootState) => state.createProject);
  const currentStepCreate = stepCreateProject[createStore.currentStep];
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between h-full">
      <div
        className={`my-20 mx-4 rounded-md  duration-700 
       ${
         isOpen
           ? "w-0 mx-0 md:mx-4 md:w-4/6 md:ml-36 overflow-hidden"
           : "w-full md:mx-36"
       }`}
      >
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">Published Project</h1>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <QueueIcon />
            </IconButton>
            <CreateModalComp
              isOpen={createStore.isModalOpen}
              maxStep={createStore.totalSteps}
              step={createStore.currentStep}
              currentStep={createStore.currentStep}
              title={currentStepCreate.title}
              component={currentStepCreate.component}
              handleSelectStep={(step: number) =>
                dispatch(setCurrentStep(step))
              }
              handleReset={() => dispatch(resetState())}
            />
          </div>
          <h4 className="text-gray-300">These projects are available.</h4>
          <div
            className={`flex flex-wrap my-8 gap-8 duration-700 w-full justify-center sm:justify-start duration-700`}
          >
            <ProjectBox
              projectName="Academ"
              avatarColor="#AF8AE2"
              membersCounts={4}
              projectEndDate={new Date()}
            />
            <ProjectBox
              projectName="JitD1"
              avatarColor="#6985FF"
              membersCounts={2}
              projectEndDate={new Date()}
            />
            <ProjectBox
              projectName="JitD2"
              avatarColor="#6985FF"
              membersCounts={2}
              projectEndDate={new Date()}
            />
            <ProjectBox
              projectName="JitD3"
              avatarColor="#6985FF"
              membersCounts={2}
              projectEndDate={new Date()}
            />
          </div>
        </div>
      </div>
      <div
        className={`duration-700 overflow-hidden bg-white max-h-full shadow-3xl
      ${isOpen ? "md:w-2/6 w-full" : "w-0"}`}
      >
        <div>
          <p>s</p>
        </div>
      </div>
    </div>
  );
};

export default MyProjectsPage;
