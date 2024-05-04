import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import {
  openDetails,
  saveTasksDetailsById,
} from "../../../stores/projectSlice/tastsDetailsSlice";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextareaAutosize } from "@mui/material";
import { ErrorCustom, QUERY_KEY } from "../../../types/GenericType";
import tasksApi from "../../../libs/tasksApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import TasksDetailsLoading from "./TasksDetailsLoading";
import { FullMember, Project } from "../../../types/ProjectType";
import { useState } from "react";
import {
  BTN_UPDATE_TASKS,
  LABEL_TASKS_DUE_DATE,
  LABEL_TASKS_START_DATE,
  Tasks,
} from "../../../types/MyTasksType";
import moment, { Moment } from "moment";
import SettingTasksTile from "../../../components/ListAccordion/ListAccordionItem/SettingTasksTile/SettingTasksTile";
import { MOCK_TASKS } from "../../../mocks/tasksMock";
import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import { toast } from "react-toastify";
import MemberDropdown from "../../../components/Dropdown/MemberDropdown";
import { useParams } from "react-router-dom";
import ProcessDropdown from "../../../components/Dropdown/ProcessDropdown";
import DatePickerRow from "../../../components/DatePicker/DatePickerRow";
import { TaskPermission } from "../../../types/Permission";

type TasksDetailsProps = {
  project?: Project;
  taskPermission: TaskPermission;
};

function TasksDetails({ project, taskPermission }: TasksDetailsProps) {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { projectId } = useParams();

  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  const [tasksDetail, setTasksDetail] = useState<Tasks>(MOCK_TASKS[0]);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const {
    isLoading: TasksIsLoading,
    isError: TasksIsError,
    isSuccess: TasksIsSuccess,
  } = useQuery(
    [QUERY_KEY.Tasks, tasksDetails.tasksSeletedId],
    () =>
      tasksApi.getTasksByProjectId(
        tasksDetails.tasksSeletedId as string,
        tasksDetails.allTasksDetals[tasksDetails.tasksSeletedId as string]
      ),
    {
      enabled: !!tasksDetails.tasksSeletedId && tasksDetails.isSideBar,
      onSuccess(data) {
        dispatch(
          saveTasksDetailsById({
            projectId: tasksDetails.tasksSeletedId as string,
            tasks: data,
          })
        );
        setTasksDetail(data);
      },
    }
  );

  const mutation = useMutation({
    mutationFn: (updateTasks: Tasks) =>
      tasksApi.updateTasks(updateTasks.tasksId, {
        tasksId: updateTasks.tasksId,
        tasksName: updateTasks.tasksName,
        projectId: projectId as string,
        processId: updateTasks.processId,
        assignee: updateTasks.assignee,
        startDate: updateTasks.startDate,
        dueDate: updateTasks.dueDate,
      }),
    onSuccess(data) {
      setTasksDetail(data);
      toast.success("Update tasks success");

      queryClient.setQueryData(
        [QUERY_KEY.ALL_TASKS],
        (oldTasks: Tasks[] | undefined) =>
          oldTasks?.map((task: Tasks) =>
            task.tasksId === data.tasksId ? data : task
          ) ?? []
      );

      queryClient.setQueryData([QUERY_KEY.Tasks, data.tasksId], data);
    },
    onError: (error: ErrorCustom) => {
      toast.error(error.description);
    },
  });

  const handleSelectMember = (selectProcess?: FullMember) => {
    setTasksDetail((prev) => ({
      ...prev,
      assignee: selectProcess,
    }));
    setAnchorElUser(null);
  };

  const handleSelectProcess = (selectProcessId: string) => {
    setTasksDetail((prev) => ({
      ...prev,
      processId: selectProcessId,
    }));
    setAnchorElUser(null);
  };

  const handleEndDate = (dueDate: Moment | null) => {
    setTasksDetail((prev) => ({
      ...prev,
      dueDate: dueDate ? dueDate.toString() : "",
    }));
  };

  const handleStartDate = (dueDate: Moment | null) => {
    setTasksDetail((prev) => ({
      ...prev,
      startDate: dueDate ? dueDate.toString() : "",
    }));
  };

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

          {TasksIsSuccess && project && tasksDetail && tasksDetail.tasksId ? (
            <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
              <div className="flex">
                <TextareaAutosize
                  disabled={!taskPermission.edit}
                  value={tasksDetail.tasksName}
                  onChange={(e) =>
                    setTasksDetail((prev) => ({
                      ...prev,
                      tasksName: e.target.value,
                    }))
                  }
                  className="w-full text-3xl font-bold overflow-hidden border-none focus:outline-none"
                />
                <SettingTasksTile
                  tasksId={tasksDetail.tasksId}
                  isVisible={taskPermission.delete}
                />
              </div>

              <div className="my-8 grid grid-cols-1 gap-4">
                <div className="flex gap-8 items-center">
                  <p className="bg-main py-2 w-32 flex justify-center rounded-md">
                    Project
                  </p>
                  <p className="bg-primary-subtle py-2 w-80 flex justify-center rounded-md text-gray-400">
                    {project.projectInfo.projectProfile.projectName}
                  </p>
                </div>

                <ProcessDropdown
                  isDisable={taskPermission.manageProcess}
                  processId={tasksDetail.processId}
                  allProcess={project.projectInfo.process}
                  anchorElUser={anchorElUser}
                  handleSetAnchorElUser={(element: null | HTMLElement) =>
                    setAnchorElUser(element)
                  }
                  handleSelectProcess={handleSelectProcess}
                />

                <MemberDropdown
                  isDisable={taskPermission.edit}
                  member={tasksDetail.assignee}
                  allMembers={project.projectInfo.members}
                  anchorElUser={anchorElUser}
                  handleSetAnchorElUser={(element: null | HTMLElement) =>
                    setAnchorElUser(element)
                  }
                  handleSelectMember={handleSelectMember}
                />

                <DatePickerRow
                  isDisable={taskPermission.edit}
                  title={LABEL_TASKS_START_DATE}
                  date={
                    tasksDetail.startDate ? moment(tasksDetail.startDate) : null
                  }
                  handleSetDate={handleStartDate}
                  isClearabler={true}
                />

                <DatePickerRow
                  isDisable={taskPermission.edit}
                  title={LABEL_TASKS_DUE_DATE}
                  date={
                    tasksDetail.dueDate ? moment(tasksDetail.dueDate) : null
                  }
                  handleSetDate={handleEndDate}
                  isClearabler={true}
                />
              </div>

              <SaveTasksDetails
                title={BTN_UPDATE_TASKS}
                disable={
                  JSON.stringify(tasksDetail) ===
                  JSON.stringify(
                    tasksDetails.allTasksDetals[
                      tasksDetails.tasksSeletedId as string
                    ]
                  )
                }
                isSaving={mutation.isLoading}
                handleChange={() => mutation.mutate(tasksDetail)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TasksDetails;
