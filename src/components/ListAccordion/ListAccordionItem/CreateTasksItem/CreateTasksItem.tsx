import { CircularProgress } from "@mui/material";
import "sweetalert2/src/sweetalert2.scss";
import { useState, useRef } from "react";
import { useQueryClient, useMutation } from "react-query";
import tasksApi from "../../../../libs/tasksApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import { CreateTasks, Tasks } from "../../../../types/MyTasksType";

type CreateTasksProps = {
  projectId: string;
  processId: string;
};

const CreateTasksItem = ({ projectId, processId }: CreateTasksProps) => {
  const queryClient = useQueryClient();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    setIsCreating(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleSetTasks = (tasksName: string) => setTasks(tasksName);

  const mutation = useMutation({
    mutationFn: (data: CreateTasks) => tasksApi.createTasks(data),
    onSuccess: (data: Tasks[]) => {
      queryClient.setQueryData(QUERY_KEY.ALL_TASKS, data);
      setTasks("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    onError: () => {},
  });

  const handleSubmit = () =>
    mutation.mutate({
      projectId: projectId,
      processId: processId,
      tasksName: tasks,
    });

  const cancelButton = () => {
    return (
      <button className="items-center flex justify-center text-white bottom-0">
        <p
          className="bg-gray-300 hover:bg-gray-400 p-1 px-4 rounded-md"
          onClick={() => setIsCreating(false)}
        >
          Cancel
        </p>
      </button>
    );
  };

  const saveButton = (isMuting: boolean) => {
    return (
      <button
        className="items-center flex justify-center text-white bottom-0"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className=" bg-info hover:bg-info-dark p-1 px-4 rounded-md flex justify-center">
          {isMuting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <p>Save</p>
          )}
        </div>
      </button>
    );
  };

  if (isCreating) {
    return (
      <div className="w-full p-1 rounded-md cursor-pointer text-gray-300">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-20">
            <input
              ref={inputRef}
              value={tasks}
              onChange={(e) => handleSetTasks(e.target.value)}
              className="flex justify-center ml-20 bg-transparent bottom-0 
              border-none focus:outline-none text-dark font-normal"
            />

            <div className="flex gap-4">
              {cancelButton()} {saveButton(mutation.isLoading)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button
      className="w-full p-1 bg-gray-100 rounded-md cursor-pointer text-gray-300"
      onClick={handleButtonClick}
    >
      <div className="flex gap-4 items-center">
        <div className="ps-12 w-full grid grid-cols-4 gap-4 font-bold">
          <p className="text-center">Create Tasks</p>
        </div>
      </div>
    </button>
  );
};

export default CreateTasksItem;
