import { useQuery } from "react-query";
import projectApi from "../../libs/projectApi";
import {
  saveOnError,
  saveProjects,
} from "../../stores/projectSlice/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";

const useAllMyProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: RootState) => state.projects.projects);

  const {
    isLoading: projectIsLoading,
    isSuccess: projectIsSuccess,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery("allProjectData", () => projectApi.getAllProject(projects), {
    onSuccess: (data) => {
      dispatch(saveProjects(data));
    },
    onError: () => {
      dispatch(saveOnError(true));
    },
  });
  return {
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectRefetch,
  };
};

export default useAllMyProjects;
