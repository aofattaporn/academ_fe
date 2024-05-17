import { IconButton, Menu, MenuItem } from "@mui/material";
import QueueIcon from "@mui/icons-material/Queue";
import ProjectBox from "./ProjectBox/ProjectBox";
import { useState } from "react";
import CreateProjectSideBar from "./CreateProjectSideBar/CreateProjectSideBar";
import useAllMyProjects from "../../hooks/projectHook/useAllMyProjects";
import ProjectBoxLoading from "./ProjectBox/ProjectBoxLoading";
import ProjectBoxFailed from "./ProjectBox/ProjectBoxFailed";
import { COUNT_ITEMS_SKELETON } from "../../types/ProjectType";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type PROJECT_TYPE = {
  PROJECT_TYPE: string;
  DESCRIPTION: string;
};

const MY_PROJECT_TYPE: PROJECT_TYPE[] = [
  {
    PROJECT_TYPE: "Published",
    DESCRIPTION: "These projects are currently available.",
  },
  {
    PROJECT_TYPE: "Archive",
    DESCRIPTION: "These projects are archived and no longer active.",
  },
];

const AllMyProjectPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    projectData,
    projectIsSuccess,
    projectIsLoading,
    projectIsError,
    projectRefetch,
  } = useAllMyProjects();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleSetAnchorElUser = (element: null | HTMLElement) =>
    setAnchorElUser(element);

  const [projectType, setProjectType] = useState<PROJECT_TYPE>(
    MY_PROJECT_TYPE[0]
  );

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
        <div className="flex justify-between">
          <div>
            <div className="flex gap-4 items-center">
              <button
                className=" bg-white border-2 border-gray-200 items-start  px-2 py-2 rounded-md flex gap-8"
                id={"Project"}
                onClick={(e) => handleSetAnchorElUser(e.currentTarget)}
              >
                <h1 className="text-md font-bold">{`${projectType.PROJECT_TYPE} Project`}</h1>
                <ExpandMoreIcon />
              </button>
              <Menu
                id="Project"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser) && anchorElUser?.id === "Project"}
                onClose={() => handleSetAnchorElUser(null)}
              >
                {MY_PROJECT_TYPE.map((type, index) => {
                  return (
                    <MenuItem
                      key={index}
                      className="flex w-full bg-black"
                      onClick={() => {
                        setProjectType(type);
                        handleSetAnchorElUser(null);
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <p>{`${type.PROJECT_TYPE} Project`}</p>
                      </div>
                    </MenuItem>
                  );
                })}
              </Menu>
              <IconButton onClick={() => setIsOpen(!isOpen)}>
                <QueueIcon />
              </IconButton>
            </div>

            <h4 className="text-gray-300">{projectType.DESCRIPTION}</h4>
            <div className="flex flex-wrap my-8 gap-4  w-full  sm:justify-start duration-700">
              {projectType.PROJECT_TYPE === "Published" && projectIsSuccess ? (
                projectData && projectData.length > 0 ? (
                  projectData
                    ?.filter((item) => item.isArchive === false)
                    .map((project, index) => {
                      return (
                        <ProjectBox
                          key={index}
                          prjectId={project.projectId}
                          projectName={project.projectProfile.projectName}
                          avatarColor={project.projectProfile.avatarColor}
                          membersCounts={project.members.length}
                          projectEndDate={project.projectEndDate}
                        />
                      );
                    })
                ) : (
                  <div className="h-full w-full flex items-center">
                    <h2 className="text-grey font-normal text-xl">
                      There are no nothing at moment.
                    </h2>
                  </div>
                )
              ) : null}

              {projectType.PROJECT_TYPE === "Archive" && projectIsSuccess ? (
                projectData && projectData.length > 0 ? (
                  projectData
                    ?.filter((item) => item.isArchive === true)
                    .map((project, index) => {
                      return (
                        <ProjectBox
                          key={index}
                          prjectId={project.projectId}
                          projectName={project.projectProfile.projectName}
                          avatarColor={project.projectProfile.avatarColor}
                          membersCounts={project.members.length}
                          projectEndDate={project.projectEndDate}
                        />
                      );
                    })
                ) : (
                  <div className="h-full w-full flex items-center">
                    <h2 className="text-grey font-normal text-xl">
                      There are no nothing at moment.
                    </h2>
                  </div>
                )
              ) : null}

              {projectIsLoading
                ? Array.from({ length: COUNT_ITEMS_SKELETON }).map(
                    (_, index) => {
                      return <ProjectBoxLoading key={index} />;
                    }
                  )
                : null}

              {projectIsError ? (
                <ProjectBoxFailed projectRefetch={() => projectRefetch()} />
              ) : null}
            </div>
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
