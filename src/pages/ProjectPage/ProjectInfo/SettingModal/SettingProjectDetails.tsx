import TextFeildInputComp from "../../../../components/Field/TextFeildInputComp";
import { ProjectDetails, Size } from "../../../../types/ProjectType";
import DatePickerRow from "../../../../components/DatePicker/DatePickerRow";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import projectApi from "../../../../libs/projectApi";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../../types/GenericType";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import moment from "moment";
import ColorSelection from "../../../../components/Field/ColorSelection";

const SettingProjectDetails = () => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    projectId: "",
    projectProfile: {
      projectName: "",
      avatarColor: "",
    },
    views: [],
    process: [],
    startDate: null,
    dueDate: null,
  });
  const projectId = useSelector((state: RootState) => state.modal.projectId);

  const {
    isLoading: projectIsLoading,
    isSuccess: projectIsSuccess,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery(
    QUERY_KEY.PROJECTINFO_SETTING,
    () => projectApi.getProjectDetails(projectId as string),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: Infinity,
      onSuccess(data) {
        setProjectDetails(data);
      },
    }
  );

  const handleProjectName = (newName: string) => {
    setProjectDetails((prev) => ({
      ...prev,
      projectProfile: {
        ...prev.projectProfile,
        projectName: newName,
      },
    }));
  };
  if (projectIsLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="flex justify-between gap-4 items-start">
        <AvatarProject
          projectName={projectDetails?.projectProfile.projectName}
          color={projectDetails?.projectProfile.avatarColor}
          isLoading={projectIsLoading}
          size={Size.medium}
        />

        <div className="grow">
          <p>Project Name</p>
          <TextFeildInputComp
            placeholder={"Enter your project"}
            value={projectDetails?.projectProfile.projectName as string}
            handleProjectName={handleProjectName}
          />
          <ColorSelection />
        </div>
      </div>

      <DatePickerRow
        title={"Start Date"}
        date={moment(projectDetails.startDate)}
        handleSetDate={() => {}}
        isClearabler={false}
      />
      <DatePickerRow
        title={"Due Date"}
        date={moment(projectDetails.dueDate)}
        handleSetDate={() => {}}
        isClearabler={false}
      />

      <div className="my-4">
        <CreateProjectButtonComp
          title={"Save"}
          disable={(projectData as ProjectDetails) === projectDetails}
          isCreating={false}
          handleChange={() => {}}
        />
      </div>
    </>
  );
};

export default SettingProjectDetails;
