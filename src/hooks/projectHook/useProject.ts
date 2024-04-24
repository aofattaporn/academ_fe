import { useQuery } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import { useNavigate, useParams } from "react-router-dom";

const useProject = () => {
  const { projectId } = useParams<string>();
  const navigate = useNavigate();

  const {
    isLoading: projectIsLoading,
    isSuccess: projectIsSuccess,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery(
    [QUERY_KEY.PROJECR, projectId],
    () => projectApi.getProject(projectId as string),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      onSettled(data) {
        if (data) navigate(data?.projectInfo.views[0]);
      },
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
