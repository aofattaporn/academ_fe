import { Backdrop, IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import { useState } from "react";
import StepAddName from "./StepProject/StepAddName";
import StepSettingViews from "./StepProject/StepSettingViews";
import ButtletStep from "./BulletStep/ButtletStep";

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);

  const handleClose = () => setIsOpen(false);
  const handleChangePage = (page: number) => setStep(page);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <QueueIcon />
      </IconButton>
      <Backdrop open={isOpen}>
        <div className="bg-white rounded-md w-full h-full md:h-auto md:w-2/4  ml-20 md:ml-0 p-4 md:p-8">
          {step == 1 ? (
            <StepAddName
              title="Project Name"
              handleClose={handleClose}
              handleChange={() => setStep(2)}
            />
          ) : null}
          {step == 2 ? (
            <StepSettingViews
              title="Project Setting Views"
              handleClose={handleClose}
              handleChange={() => setStep(2)}
            />
          ) : null}

          <ButtletStep step={step} handleSetStep={handleChangePage} />
        </div>
      </Backdrop>
    </>
  );
};

export default CreateProject;
