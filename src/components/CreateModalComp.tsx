import { Backdrop } from "@mui/material";
import ButtletStep from "../pages/ProjectPage/CreateProject/StepProjectTail/BulletStep";
import StepProjectHeader from "../pages/ProjectPage/CreateProject/StepProjectHeader/StepProjectHeader";

type CreateModalProps = {
  isOpen: boolean;
  title: string;
  component: JSX.Element;
  maxStep: number;
  step: number;
  currentStep: number;
  handleSelectStep: (step: number) => void;
  handleReset: () => void;
};

const CreateModalComp = ({
  isOpen,
  title,
  component,
  maxStep,
  step,
  currentStep,
  handleSelectStep,
  handleReset,
}: CreateModalProps) => {
  return (
    <Backdrop open={isOpen}>
      <div className="bg-white rounded-md w-full h-full md:h-auto md:w-2/4 ml-20 md:ml-0 p-4 md:p-8">
        <div>
          <StepProjectHeader title={title} handleReset={handleReset} />
          {component}
          <ButtletStep
            maxStep={maxStep}
            step={step}
            currentStep={currentStep}
            handleSelectStep={handleSelectStep}
          />
        </div>
      </div>
    </Backdrop>
  );
};

export default CreateModalComp;
