import { useQuery } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Process, Project } from "../../types/ProjectType";

const useProject = () => {
  const { projectId } = useParams<string>();
  const [process, setProcess] = useState<Process[]>([]);
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
      onSuccess(data: Project) {
        navigate(data.navigateView);
        navigate(data.navigateView);
        setProcess(data.projectInfo.process);
      },
    }
  );
  return {
    process,
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectRefetch,
  };
};

export default useProject;
