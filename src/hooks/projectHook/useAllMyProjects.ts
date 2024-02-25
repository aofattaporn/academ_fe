import { useQuery } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";

const useAllMyProjects = () => {
  const {
    isLoading: projectIsLoading,
    isSuccess: projectIsSuccess,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery(QUERY_KEY.ALL_PROJECT, () => projectApi.getAllProject());
  return {
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectRefetch,
  };
};

export default useAllMyProjects;
