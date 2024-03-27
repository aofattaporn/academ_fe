import { useMutation, useQuery, useQueryClient } from "react-query";
import { QUERY_KEY } from "../../types/GenericType";
import tasksApi from "../../libs/tasksApi";
import { useNavigate, useParams } from "react-router-dom";
import { Tasks } from "../../types/MyTasksType";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { saveAllTasks } from "../../stores/tasksSlice/allTasksSlice";

const useAllTasks = () => {
  let { projectId } = useParams();
  const [tempTasks, setTempTasks] = useState<Tasks[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const allTasks = useSelector((state: RootState) => state.allTasks.allTasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isLoading: allTaksIsLoading,
    isSuccess: allTaksIsSuccesss,
    isError: allTaksIsError,
    data: allTaksData,
    error: allTasksError,
    refetch: allTaksRefetch,
  } = useQuery(
    QUERY_KEY.ALL_TASKS,
    () => tasksApi.getAllTasksByProjectId(allTasks, projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data: Tasks[]) {
        dispatch(saveAllTasks(data));
        setTempTasks(data);
      },
    }
  );

  const mutation = useMutation({
    mutationFn: ({ tasks, processId }: { tasks: string; processId: string }) =>
      tasksApi.changeProcess(tasks, processId),
  });

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!active || !over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId !== overId) {
      const [processActive, tasksActive] = activeId.split("-");
      const [processOver, tasksOver] = overId.split("-");

      const newTasks = arrayMove(
        tempTasks,
        tempTasks.findIndex((task) => task.tasksId === tasksActive),
        tempTasks.findIndex((task) => task.tasksId === tasksOver)
      );

      if (processActive !== processOver) {
        mutation.mutate({ tasks: tasksActive, processId: processOver });
        queryClient.setQueryData(QUERY_KEY.ALL_TASKS, () => {
          return newTasks.map((task) => {
            if (task.tasksId === tasksActive) {
              return { ...task, processId: processOver };
            } else {
              return task;
            }
          });
        });
      } else {
        queryClient.setQueryData(QUERY_KEY.ALL_TASKS, newTasks);
      }
    }
  };

  function arrayMove<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const newArray = [...array];
    const [removedElement] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, removedElement);
    return newArray;
  }

  return {
    allTaksIsLoading,
    allTaksIsSuccesss,
    allTaksIsError,
    allTaksData,
    allTasksError,
    tempTasks,
    activeId,
    mutation,
    navigate,
    setTempTasks,
    allTaksRefetch,
    handleDragStart,
    handleDragEnd,
  };
};

export default useAllTasks;
