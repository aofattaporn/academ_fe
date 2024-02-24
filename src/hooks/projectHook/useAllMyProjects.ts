import { useQuery } from "react-query";
import projectApi from "../../libs/projectApi";

const useAllMyProjects = () => {
  const {
    isLoading: projectIsLoading,
    isSuccess: projectIsSuccess,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery("allProjectData", () => projectApi.getAllProject());
  return {
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectRefetch,
  };
};

export default useAllMyProjects;
