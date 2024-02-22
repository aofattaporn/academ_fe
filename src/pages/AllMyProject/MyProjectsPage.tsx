import { IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import ProjectBox from "./ProjectBox/ProjectBox";
import { useState } from "react";
import CreateProjectSideBar from "./CreateProjectSideBar/CreateProjectSideBar";

type TempMockProjectList = {
  projectName: string;
  avatarColor: string;
  membersCounts: number;
  projectEndDate: Date;
};

const mockProjectList: TempMockProjectList[] = [
  {
    projectName: "Academ",
    avatarColor: "#AF8AE2",
    membersCounts: 4,
    projectEndDate: new Date(),
  },
  {
    projectName: "TungTee",
    avatarColor: "#6985FF",
    membersCounts: 2,
    projectEndDate: new Date(),
  },
  {
    projectName: "XTra",
    avatarColor: "#6985FF",
    membersCounts: 3,
    projectEndDate: new Date(),
  },
  {
    projectName: "XTra",
    avatarColor: "#6985FF",
    membersCounts: 3,
    projectEndDate: new Date(),
  },
];

const MyProjectsPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between h-full">
      {/* // all-project-contents */}
      <div
        className={`my-20 duration-700 
       ${
         isOpen
           ? "w-0    mx-0 md:mx-4 md:w-4/6 md:ml-8 lg:ml-36 overflow-hidden"
           : "w-full mx-4 md:mx-36"
       }`}
      >
        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl font-bold">Published Project</h1>
            <IconButton onClick={() => setIsOpen(!isOpen)}>
              <QueueIcon />
            </IconButton>
          </div>
          <h4 className="text-gray-300">These projects are available.</h4>
          <div className="flex flex-wrap my-8 gap-4  w-full justify-center sm:justify-start duration-700">
            {mockProjectList.map((project, index) => {
              return (
                <ProjectBox
                  key={index}
                  projectName={project.projectName}
                  avatarColor={project.avatarColor}
                  membersCounts={project.membersCounts}
                  projectEndDate={project.projectEndDate}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* // create-project-sidebar */}
      <CreateProjectSideBar
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default MyProjectsPage;
