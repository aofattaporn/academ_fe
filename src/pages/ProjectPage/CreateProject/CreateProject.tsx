import { Backdrop, IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import { useState } from "react";
import StepAddName from "./StepProject/StepAddName";
import StepSettingViews from "./StepProject/StepSettingViews";

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
              handleClose={handleClose}
              handleChange={() => {
                setStep(1);
              }}
            />
          ) : null}
          {step == 2 ? (
            <StepSettingViews
              handleClose={handleClose}
              handleChange={() => setStep(2)}
            />
          ) : null}

          <div className="mt-6 flex justify-center gap-4">
            <div
              onClick={() => setStep(1)}
              className={`rounded-full w-3 h-3 ${
                step >= 1 ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
            <div
              onClick={() => setStep(2)}
              className={`rounded-full w-3 h-3 ${
                step >= 2 ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
            <div
              onClick={() => setStep(3)}
              className={`rounded-full w-3 h-3 ${
                step >= 3 ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
            <div
              onClick={() => setStep(4)}
              className={`rounded-full w-3 h-3 ${
                step >= 4 ? "bg-primary" : "bg-gray-200"
              }`}
            ></div>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default CreateProject;
