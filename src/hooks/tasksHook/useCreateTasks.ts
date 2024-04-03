import { useState, useRef } from "react";
import { useQueryClient, useMutation } from "react-query";
import tasksApi from "../../libs/tasksApi";
import { QUERY_KEY } from "../../types/GenericType";
import { CreateTasks, Tasks } from "../../types/MyTasksType";

const useCreateTasks = () => {
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

  const handleSubmit = (
    projectId: string,
    processId: string,
    startDate?: string,
    dueDate?: string
  ) =>
    mutation.mutate({
      projectId: projectId,
      processId: processId,
      tasksName: tasks,
      startDate: startDate,
      dueDate: dueDate,
    });

  return {
    isCreating,
    inputRef,
    mutation,
    tasks,
    setIsCreating,
    handleButtonClick,
    handleSetTasks,
    handleSubmit,
  };
};

export default useCreateTasks;
