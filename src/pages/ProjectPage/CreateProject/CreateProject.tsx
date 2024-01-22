import { Backdrop, IconButton, TextField } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import AuthButtonComp from "../../../components/Button/AuthButtonComp";

const CreateProject = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <QueueIcon />
      </IconButton>
      <Backdrop open={isOpen}>
        <div className="bg-white rounded-md w-full h-full md:h-auto md:w-2/4  ml-20 md:ml-0 p-4 md:p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-dark font-bold text-xl">Project Name</h1>
            <IconButton onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="bg-main mt-6 p-8">
            <div className="flex gap-4">
              <div className="rounded-md bg-primary w-16 h-16 flex justify-center items-center">
                <p className=" font-bold text-white text-3xl">P</p>
              </div>
              <div>
                <p className="text-sm text-grey mb-2">Colors</p>
                <div className="flex gap-2">
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                  <div className="rounded-full bg-gray-200 w-4 h-4"></div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p>Project Name</p>
              <TextField size="small" fullWidth />
            </div>
          </div>

          <div className="bg-main mt-6">
            <AuthButtonComp title="Next" />
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <div className="rounded-full bg-primary w-3 h-3"></div>
            <div className="rounded-full bg-gray-200 w-3 h-3"></div>
            <div className="rounded-full bg-gray-200 w-3 h-3"></div>
            <div className="rounded-full bg-gray-200 w-3 h-3"></div>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default CreateProject;
