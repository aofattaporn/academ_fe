import { IconButton, TextField } from "@mui/material";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type StepAddNameProps = {
  handleClose: () => void;
  handleChange: () => void;
};

const StepAddName = ({ handleClose, handleChange }: StepAddNameProps) => {
  const [nameProject, setNameProject] = useState<String>("");

  const handleNameProject = (nameProject: String) => {
    setNameProject(nameProject);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-dark font-bold text-xl">Project Name</h1>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className="bg-main mt-6 p-8">
        <div className="flex gap-4">
          <div className="rounded-md bg-primary w-16 h-16 flex justify-center items-center">
            <p className=" font-bold text-white text-3xl">
              {nameProject ? nameProject.at(0) : "-"}
            </p>
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
          <TextField
            size="small"
            fullWidth
            value={nameProject}
            onChange={(e) => handleNameProject(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-main mt-6" onClick={handleChange}>
        <CreateProjectButtonComp
          title="Next"
          disable={nameProject ? false : true}
          handleChange={handleChange}
        />
      </div>
    </>
  );
};

export default StepAddName;
