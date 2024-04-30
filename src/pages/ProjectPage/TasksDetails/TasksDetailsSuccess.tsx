import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Moment } from "moment";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { toast } from "react-toastify";

import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import tasksApi from "../../../libs/tasksApi";
import { ErrorCustom, QUERY_KEY } from "../../../types/GenericType";
import {
  BTN_UPDATE_TASKS,
  LABEL_TASKS_DUE_DATE,
  LABEL_TASKS_START_DATE,
  Tasks,
} from "../../../types/MyTasksType";
import { FullMember, Process, Project } from "../../../types/ProjectType";
import moment from "moment";
import DatePickerRow from "../../../components/DatePicker/DatePickerRow";
import ProcessDropdown from "../../../components/Dropdown/ProcessDropdown";
import MemberDropdown from "../../../components/Dropdown/MemberDropdown";
import SettingTasksTile from "../../../components/ListAccordion/ListAccordionItem/SettingTasksTile/SettingTasksTile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { saveTasksDetailsById } from "../../../stores/projectSlice/tastsDetailsSlice";

type TasksDetailsSuccessProps = {
  tasksData: Tasks;
  projectData: Project;
  tasksId: string;
};

const TasksDetailsSuccess = ({
  tasksData,
  projectData,
  tasksId,
}: TasksDetailsSuccessProps) => {
  // TODO: task not update ?
  const [tasks, setTasks] = useState<Tasks>(tasksData);
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  const dispatch = useDispatch();

  const {} = useQuery(
    [QUERY_KEY.Tasks, tasksDetails.tasksSeletedId],
    () =>
      tasksApi.getTasksByProjectId(
        tasksDetails.tasksSeletedId as string,
        tasksDetails.allTasksDetals[tasksDetails.tasksSeletedId as string]
      ),
    {
      enabled: !!tasksDetails.tasksSeletedId && tasksDetails.isSideBar,
      onSuccess(data) {
        console.log(data);
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
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleSetAnchorElUser = (element: null | HTMLElement) =>
    setAnchorElUser(element);

  const queryClient = useQueryClient();
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  const mutation = useMutation({
    mutationFn: (updateTasks: Tasks) =>
      tasksApi.updateTasks(tasks.tasksId, {
        tasksId: tasks.tasksId,
        tasksName: updateTasks.tasksName,
        processId: myProcess?.processId
          ? myProcess?.processId
          : updateTasks.processId,
        assignee: assignee
          ? assignee
          : ({
              userId: "",
              userName: "",
              email: "",
              roleId: "",
              avatarColor: "",
            } as FullMember),
        startDate: updateTasks.startDate,
        dueDate: updateTasks.dueDate,
      }),
    onSuccess: (updatedTasks: Tasks) => {
      setTasks(updatedTasks);
      setIsDirty(false);
      toast.success("Update tasks success");

      queryClient.setQueryData(
        [QUERY_KEY.ALL_TASKS],
        (oldTasks: Tasks[] | undefined) =>
          oldTasks?.map((task: Tasks) =>
            task.tasksId === updatedTasks.tasksId ? updatedTasks : task
          ) ?? []
      );

      queryClient.setQueryData(
        [QUERY_KEY.Tasks, tasksData.tasksId],
        updatedTasks
      );
    },
    onError: (error: ErrorCustom) => {
      toast.error(error.description);
    },
  });

  const [myProcess, setMyProcess] = useState<Process | undefined>(
    projectData.projectInfo.process.find(
      (process) => process.processId === tasks.processId
    )
  );

  const [assignee, setAssignee] = useState<FullMember | undefined>(
    tasks.assignee
  );

  const handleSelectProcess = (selectProcess: Process) => {
    setMyProcess(selectProcess);
    setIsDirty(true);
    setAnchorElUser(null);
  };

  const handleSelectMember = (assignee: FullMember | undefined) => {
    setAssignee(assignee);
    setIsDirty(true);
    setAnchorElUser(null);
  };

  const handleStartDate = (startDate: Moment | null) => {
    setIsDirty(true);
    setTasks((prev) => ({
      ...prev,
      startDate: startDate ? startDate.toString() : "",
    }));
  };

  const handleEndDate = (dueDate: Moment | null) => {
    setIsDirty(true);
    setTasks((prev) => ({
      ...prev,
      dueDate: dueDate ? dueDate.toString() : "",
    }));
  };

  const handleTasksName = (tasksName: string) => {
    setIsDirty(tasksName !== tasksData.tasksName);
    setTasks((prev) => ({
      ...prev,
      tasksName,
    }));
  };

  return (
    <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
      <h1 className=" text-xl font-bold">{tasks.tasksName}</h1>
      <h1 className=" text-xl font-bold">
        {tasksDetails.allTasksDetals[tasksId]?.tasksName}
      </h1>

      <div className="flex">
        <TextareaAutosize
          defaultValue={tasks.tasksName}
          value={tasks.tasksName}
          onChange={(e) => handleTasksName(e.target.value)}
          className="w-full text-3xl font-bold overflow-hidden border-none focus:outline-none"
        />
        <SettingTasksTile tasksId={tasks.tasksId} isVisible={true} />
      </div>

      <div className="my-8 grid grid-cols-1 gap-4">
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Project
          </p>
          <p className="bg-primary-subtle py-2 w-80 flex justify-center rounded-md text-gray-400">
            {projectData?.projectInfo.projectProfile.projectName}
          </p>
        </div>

        <MemberDropdown
          member={assignee as FullMember}
          allMembers={projectData.projectInfo.members}
          anchorElUser={anchorElUser}
          handleSetAnchorElUser={handleSetAnchorElUser}
          handleSelectMember={handleSelectMember}
        />

        <ProcessDropdown
          process={myProcess as Process}
          allProcess={projectData.projectInfo.process}
          anchorElUser={anchorElUser}
          handleSetAnchorElUser={handleSetAnchorElUser}
          handleSelectProcess={handleSelectProcess}
        />

        <DatePickerRow
          title={LABEL_TASKS_START_DATE}
          date={tasks.startDate ? moment(tasks.startDate) : null}
          handleSetDate={handleStartDate}
          isClearabler={true}
        />

        <DatePickerRow
          title={LABEL_TASKS_DUE_DATE}
          date={tasks.dueDate ? moment(tasks.dueDate) : null}
          handleSetDate={handleEndDate}
          isClearabler={true}
        />
      </div>

      <SaveTasksDetails
        title={BTN_UPDATE_TASKS}
        disable={!isDirty}
        isSaving={mutation.isLoading}
        handleChange={() => mutation.mutate(tasks)}
      />
    </div>
  );
};

export default TasksDetailsSuccess;
