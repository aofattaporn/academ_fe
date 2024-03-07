import { Outlet, useOutletContext } from "react-router-dom";
import useProject from "../../hooks/projectHook/useProject";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import ProjectInfoLoading from "./ProjectInfo/ProjectInfoLoading";
import { Process, TaskPermission } from "../../types/ProjectType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { openDetails } from "../../stores/projectSlice/tastsDetailsSlice";

type ContextType = {
  taskPermission: TaskPermission | undefined;
  process: Process[] | undefined;
};

const ProjectPage = () => {
  const { projectIsLoading, projectIsSuccess, projectData } = useProject();
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div
        className={`${
          tasksDetails.isSideBar ? "w-4/6" : "w-full"
        } duration-700`}
      >
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
      </div>

      <div
        className={`${
          tasksDetails.isSideBar ? "w-2/6" : "w-0"
        } bg-white h-screen shadow-md duration-700 overflow-hidden`}
      >
        <button onClick={() => dispatch(openDetails(false))}>Close</button>
        <h1>Test Hwllo world</h1>
      </div>
    </div>
  );
};

export function useProjectPermission() {
  return useOutletContext<ContextType>();
}

export default ProjectPage;
