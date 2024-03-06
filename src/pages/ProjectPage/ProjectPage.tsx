import { Outlet, useOutletContext } from "react-router-dom";
import useProject from "../../hooks/projectHook/useProject";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import ProjectInfoLoading from "./ProjectInfo/ProjectInfoLoading";
import { Process, TaskPermission } from "../../types/ProjectType";

type ContextType = {
  taskPermission: TaskPermission | undefined;
  process: Process[] | undefined;
};

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
      <Outlet
        context={{
          taskPermission: projectData?.taskPermission,
          process: projectData?.projectInfo.process,
        }}
      />
    </>
  );
};

export function useProjectPermission() {
  return useOutletContext<ContextType>();
}

export default ProjectPage;
