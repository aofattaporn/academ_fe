import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import useProject from "../../hooks/projectHook/useProject";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import ProjectInfoLoading from "./ProjectInfo/ProjectInfoLoading";
import { Process } from "../../types/ProjectType";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import TasksDetails from "./TasksDetails/TasksDetails";
import { TaskPermission } from "../../types/Permission";

type ContextType = {
  taskPermission: TaskPermission | undefined;
  process: Process[] | undefined;
};

const ProjectPage = () => {
  const { projectIsLoading, projectIsSuccess, projectData, process } =
    useProject();
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  return (
    <div className="flex text-dark font-roboto">
      <div
        className={`${
          tasksDetails.isSideBar ? "w-4/6" : "w-full"
        } duration-700`}
      >
        <div className="bg-white w-full shadow-sm flex px-4 gap-8 items-end">
          {projectIsLoading ? <ProjectInfoLoading /> : null}
          {projectIsSuccess && projectData ? (
            <ProjectInfo projectData={projectData} />
          ) : null}
        </div>
        {process && projectData ? (
          <Outlet
            context={{
              taskPermission: projectData.taskPermission,
              process: process,
            }}
          />
        ) : null}
      </div>

      {projectData && projectData.taskPermission ? (
        <TasksDetails
          project={projectData}
          taskPermission={projectData.taskPermission}
        />
      ) : null}
    </div>
  );
};

export function useProjectPermission() {
  return useOutletContext<ContextType>();
}

export default ProjectPage;
