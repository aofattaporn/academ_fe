import { FormControl, IconButton, InputLabel, MenuItem } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import { useState } from "react";
import { Select } from "@mui/base/Select";

const ProjectPage = () => {
  const [avilable, setAvaliable] = useState<boolean>(true);

  const handleChange = (event: any) => {
    setAvaliable(event.target.value);
  };

  const handleCreateProject = () => {
    console.log("create project");
  };
  return (
    <div className="my-20 mx-4 md:mx-40 rounded-md">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">Published Classes</h1>
            <IconButton onClick={handleCreateProject}>
              <QueueIcon />
            </IconButton>
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
