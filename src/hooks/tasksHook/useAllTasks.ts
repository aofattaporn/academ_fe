import { useQuery } from "react-query";
import { QUERY_KEY } from "../../types/GenericType";
import tasksApi from "../../libs/tasksApi";
import { useParams } from "react-router-dom";
import { Tasks } from "../../types/MyTasksType";
import { useState } from "react";

const useAllTasks = () => {
  let { projectId } = useParams();
  const [tempTasks, setTempTasks] = useState<Tasks[]>([]);

  const {
    isLoading: allTaksIsLoading,
    isSuccess: allTaksIsSuccesss,
    isError: allTaksIsError,
    refetch: allTaksRefetch,
    data: allTaksData,
    error: allTasksError,
  } = useQuery(
    QUERY_KEY.ALL_TASKS,
    () => tasksApi.getAllTasksByProjectId(projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data) {
        setTempTasks(data);
      },
    }
  );
  return {
    allTaksIsLoading,
    allTaksIsSuccesss,
    allTaksIsError,
    allTaksData,
    allTasksError,
    tempTasks,
    setTempTasks,
    allTaksRefetch,
  };
};

export default useAllTasks;
