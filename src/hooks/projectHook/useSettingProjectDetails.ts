import { useMutation, useQuery, useQueryClient } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import { Moment } from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { Project, ProjectDetails } from "../../types/ProjectType";
import { closeModal } from "../../stores/modalSlice/modalSlice";
import { toast } from "react-toastify";

const useSettingProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    projectId: "",
    projectProfile: {
      projectName: "",
      avatarColor: "",
    },
    views: [],
  });
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    isLoading: projectIsLoading,
    isError: projectIsError,
    refetch: projectRefetch,
    isSuccess: projectIsSuccess,
    data: projectData,
  } = useQuery(
    QUERY_KEY.PROJECTINFO_SETTING,
    () => projectApi.getProjectDetails(projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data) {
        setProjectDetails(data);
      },
    }
  );

  const mutation = useMutation({
    mutationFn: () =>
      projectApi.updateProjectDetails(projectId as string, projectDetails),
    onSuccess(data: Project) {
      queryClient.setQueryData([QUERY_KEY.PROJECR, projectId], data);
      dispatch(closeModal());
      toast.success("Update tasks details success");
    },
    onError() {
      toast.error("Failed to update project details");
    },
  });

  const handleProjectName = (newName: string) => {
    setProjectDetails((prev) => ({
      ...prev,
      projectProfile: {
        ...prev.projectProfile,
        projectName: newName,
      },
    }));
  };

  const handleColor = (color: string) => {
    setProjectDetails((prev) => ({
      ...prev,
      projectProfile: {
        ...prev.projectProfile,
        avatarColor: color,
      },
    }));
  };

  const handleStartDate = (startDate: Moment | null) => {
    if (!startDate) return;
    setProjectDetails((prev) => ({
      ...prev,
      startDate: startDate.toString(),
    }));
  };

  const handleEndDate = (dueDate: Moment | null) => {
    if (!dueDate) return;
    setProjectDetails((prev) => ({
      ...prev,
      dueDate: dueDate.toString(),
    }));
  };

  const handleCheckIsdirty = (): boolean => {
    return JSON.stringify(projectData) === JSON.stringify(projectDetails);
  };

  return {
    mutation,
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectDetails,
    projectRefetch,
    handleProjectName,
    handleColor,
    handleStartDate,
    handleEndDate,
    handleCheckIsdirty,
  };
};

export default useSettingProjectDetails;
