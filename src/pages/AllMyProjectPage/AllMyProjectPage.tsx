import { IconButton } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import ProjectBox from "./ProjectBox/ProjectBox";
import { useState } from "react";
import CreateProjectSideBar from "./CreateProjectSideBar/CreateProjectSideBar";
import useAllMyProjects from "../../hooks/projectHook/useAllMyProjects";
import ProjectBoxLoading from "./ProjectBox/ProjectBoxLoading";
import ProjectBoxFailed from "./ProjectBox/ProjectBoxFailed";
import { COUNT_ITEMS_SKELETON } from "../../types/ProjectType";

const AllMyProjectPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    projectData,
    projectIsSuccess,
    projectIsLoading,
    projectIsError,
    projectRefetch,
  } = useAllMyProjects();

  return (
    <div className="flex justify-between h-full">
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
            {projectIsSuccess
              ? projectData?.map((project, index) => {
                  return (
                    <ProjectBox
                      key={index}
                      prjectId={project.projectId}
                      projectName={project.projectProfile.projectName}
                      avatarColor={project.projectProfile.avatarColor}
                      membersCounts={project.membersCounts}
                      projectEndDate={project.projectEndDate}
                    />
                  );
                })
              : null}

            {projectIsLoading
              ? Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
                  return <ProjectBoxLoading key={index} />;
                })
              : null}

            {projectIsError ? (
              <ProjectBoxFailed projectRefetch={() => projectRefetch()} />
            ) : null}
          </div>
        </div>
      </div>

      <CreateProjectSideBar
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default AllMyProjectPage;
