import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import { BTN_UPDATE_TASKS, Tasks } from "../../../types/MyTasksType";
import moment, { Moment } from "moment";
import { Project } from "../../../types/ProjectType";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import TextArea from "../../../components/TextArea/TextArea";
import { useMutation, useQueryClient } from "react-query";
import tasksApi from "../../../libs/tasksApi";
import { ErrorCustom, QUERY_KEY } from "../../../types/GenericType";
import { toast } from "react-toastify";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

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
    if (tasksName === tasksData.tasksName) {
      setIsDirty(false);
      return;
    }

    setIsDirty(true);
    setTasks((prev) => ({
      ...prev,
      tasksName: tasksName,
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
        (oldTasks: Tasks[] | undefined) => {
          if (!oldTasks) return [];
          return oldTasks.map((task: Tasks) => {
            return task.tasksId === updatedTasks.tasksId ? updatedTasks : task;
          });
        }
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
              defaultValue={moment(tasks.startDate)}
              slotProps={{
                field: {
                  clearable: true,
                },
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
              defaultValue={moment(tasks.dueDate)}
              slotProps={{
                field: {
                  clearable: true,
                },
                textField: { size: "small" },
              }}
            />
          </div>
        </div>
      </div>

      {/* <div className="my-8 w-full grid grid-cols-1 gap-4">
        <p>Description</p>
        <TextArea />
      </div> */}

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
