import { useQuery } from "react-query";
import { QUERY_KEY } from "../../types/GenericType";
import tasksApi from "../../libs/tasksApi";
import { useParams } from "react-router-dom";

const useAllTasks = () => {
  let { projectId } = useParams();

  const {
    isLoading: allTaksIsLoading,
    isSuccess: allTaksIsSuccesss,
    isError: allTaksIsError,
    refetch: allTaksRefetch,
    data: allTaksData,
  } = useQuery(QUERY_KEY.ALL_TASKS, () =>
    tasksApi.getAllTasksByProjectId(projectId as string)
  );
  return {
    allTaksIsLoading,
    allTaksIsSuccesss,
    allTaksIsError,
    allTaksData,
    allTaksRefetch,
  };
};

export default useAllTasks;
