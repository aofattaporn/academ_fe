import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Moment } from "moment";
import { DatePicker } from "@mui/x-date-pickers";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { toast } from "react-toastify";

import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import tasksApi from "../../../libs/tasksApi";
import { ErrorCustom, QUERY_KEY } from "../../../types/GenericType";
import { BTN_UPDATE_TASKS, Tasks } from "../../../types/MyTasksType";
import { Project } from "../../../types/ProjectType";
import moment from "moment";

type TasksDetailsSuccessProps = {
  tasksData: Tasks;
  projectData: Project;
};

const TasksDetailsSuccess = ({
  tasksData,
  projectData,
}: TasksDetailsSuccessProps) => {
  const [tasks, setTasks] = useState<Tasks>(tasksData);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const queryClient = useQueryClient();

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

  const mutation = useMutation({
    mutationFn: (updateTasks: Tasks) =>
      tasksApi.updateTasks(tasks.tasksId, updateTasks),
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

  return (
    <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
      <TextareaAutosize
        defaultValue={tasks.tasksName}
        onChange={(e) => handleTasksName(e.target.value)}
        className="w-full text-3xl font-bold overflow-hidden border-none focus:outline-none"
      />

      <div className="my-8 grid grid-cols-1 gap-4">
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Project
          </p>
          <p className="bg-primary-subtle py-2 w-80 flex justify-center rounded-md text-gray-400">
            {projectData?.projectInfo.projectProfile.projectName}
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-4 items-center">
          <p className="bg-main py-2 flex justify-center rounded-md">
            start date
          </p>
          <div className="col-span-2">
            <DatePicker
              onChange={handleStartDate}
              defaultValue={tasks.startDate ? moment(tasks.startDate) : null}
              slotProps={{
                field: { clearable: true },
                textField: { size: "small" },
              }}
            />
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-4 items-center">
          <p className="bg-main py-2 flex justify-center rounded-md">
            due date
          </p>
          <div className="col-span-2">
            <DatePicker
              onChange={handleEndDate}
              defaultValue={tasks.dueDate ? moment(tasks.dueDate) : null}
              slotProps={{
                field: { clearable: true },
                textField: { size: "small" },
              }}
            />
          </div>
        </div>
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
