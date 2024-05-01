import { useMutation, useQuery, useQueryClient } from "react-query";
import projectApi from "../../libs/projectApi";
import { QUERY_KEY } from "../../types/GenericType";
import moment, { Moment } from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { Project, ProjectDetails, Views } from "../../types/ProjectType";
import { closeModal } from "../../stores/modalSlice/modalSlice";
import { toast } from "react-toastify";
import { ProjectPermission } from "../../types/Permission";

const useSettingProjectDetails = () => {
  const [projectPermission, setProjectPermission] = useState<ProjectPermission>(
    { editProfile: false }
  );
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    projectId: "",
    projectProfile: {
      projectName: "",
      avatarColor: "",
    },
    projectStartDate: "",
    projectEndDate: "",
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
      onSuccess(data) {
        setProjectDetails(data.projectDetails);
        setProjectPermission(data.projectPermission);
      },
    }
  );

  const mutation = useMutation({
    mutationFn: () =>
      projectApi.updateProjectDetails(projectId as string, {
        ...projectDetails,
        projectStartDate: projectDetails.projectStartDate
          ? moment(projectDetails.projectStartDate).toISOString()
          : null,
        projectEndDate: projectDetails.projectEndDate
          ? moment(projectDetails.projectEndDate).toISOString()
          : null,
      }),
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
    setProjectDetails((prev) => ({
      ...prev,
      projectStartDate: startDate ? startDate.toString() : "",
    }));
  };

  const handleEndDate = (dueDate: Moment | null) => {
    setProjectDetails((prev) => ({
      ...prev,
      projectEndDate: dueDate ? dueDate.toString() : "",
    }));
  };

  const handleCheckIsdirty = (): boolean => {
    return JSON.stringify(projectData) === JSON.stringify(projectDetails);
  };

  const handleSetSelected = (view: Views) => {
    const isSelected = projectDetails.views.some(
      (selectedView) => selectedView === view
    );

    if (isSelected) {
      const updatedViews = projectDetails.views.filter(
        (selectedView) => selectedView !== view
      );

      setProjectDetails((prev) => ({
        ...prev,
        views: updatedViews,
      }));
    } else {
      setProjectDetails((prev) => ({
        ...prev,
        views: [...prev.views, view],
      }));
    }
  };

  return {
    mutation,
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectDetails,
    projectPermission,
    projectRefetch,
    handleProjectName,
    handleColor,
    handleStartDate,
    handleEndDate,
    handleCheckIsdirty,
    handleSetSelected,
  };
};

export default useSettingProjectDetails;
