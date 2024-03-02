import { useQuery } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import { useParams } from "react-router-dom";

const useProject = () => {
  let { projectId } = useParams();

  const {
    isLoading: projectIsLoading,
    isSuccess: projectIsSuccess,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery(
    QUERY_KEY.PROJECR + projectId,
    () => projectApi.getProject(projectId as string),
    {
      refetchOnWindowFocus: false,
    }
  );
  return {
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectRefetch,
  };
};

export default useProject;
