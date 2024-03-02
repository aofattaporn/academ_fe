import { Outlet } from "react-router-dom";
import useProject from "../../hooks/projectHook/useProject";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import ProjectInfoLoading from "./ProjectInfo/ProjectInfoLoading";

const ProjectPage = () => {
  const { projectIsLoading, projectIsSuccess, projectData } = useProject();

  return (
    <>
      <div className="bg-white w-full shadow-sm flex px-8 gap-8 items-end text-dark font-roboto">
        {projectIsSuccess && projectData ? (
          <ProjectInfo projectData={projectData} />
        ) : null}
        {projectIsLoading ? <ProjectInfoLoading /> : null}
      </div>
      <Outlet />
    </>
  );
};

export default ProjectPage;
