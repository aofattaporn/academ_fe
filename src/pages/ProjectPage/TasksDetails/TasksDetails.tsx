import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { openDetails } from "../../../stores/projectSlice/tastsDetailsSlice";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { QUERY_KEY } from "../../../types/GenericType";
import tasksApi from "../../../libs/tasksApi";
import { useQuery } from "react-query";
import TasksDetailsLoading from "./TasksDetailsLoading";
import TasksDetailsSuccess from "./TasksDetailsSuccess";
import { Project } from "../../../types/ProjectType";

type TasksDetailsProps = {
  project?: Project;
};

function TasksDetails({ project }: TasksDetailsProps) {
  const dispatch = useDispatch();
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  const {
    isLoading: TasksIsLoading,
    isSuccess: TasksIsSuccesss,
    isError: TasksIsError,
    data: TaksData,
  } = useQuery(
    [QUERY_KEY.Tasks, tasksDetails.tasksSeletedId],
    () => tasksApi.getTasksByProjectId(tasksDetails.tasksSeletedId as string),
    {
      enabled: !!tasksDetails.tasksSeletedId,
    }
  );

  return (
    <div
      className={`duration-700 overflow-x-hidden bg-white max-h-full shadow-3xl h-screen font-roboto text-dark
      ${tasksDetails.isSideBar ? "md:w-4/6 lg:w-2/6 w-full" : "w-0"}`}
    >
      <div className="py-8 pl-4 pr-12">
        <div className="flex gap-4 items-start">
          <IconButton onClick={() => dispatch(openDetails(false))}>
            <CloseIcon />
          </IconButton>

          {TasksIsLoading || !project ? <TasksDetailsLoading /> : null}
          {TasksIsError ? <TasksDetailsLoading /> : null}
          {TasksIsSuccesss && project ? (
            <TasksDetailsSuccess tasksData={TaksData} projectData={project} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TasksDetails;
