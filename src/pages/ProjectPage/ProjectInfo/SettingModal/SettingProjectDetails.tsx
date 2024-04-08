import TextFeildInputComp from "../../../../components/Field/TextFeildInputComp";
import {
  PLACHOLDER_INPUT_PROJECT,
  ProjectDetails,
  Size,
} from "../../../../types/ProjectType";
import DatePickerRow from "../../../../components/DatePicker/DatePickerRow";
import CreateProjectButtonComp from "../../../../components/Button/CreateProjectButtonComp";
import projectApi from "../../../../libs/projectApi";
import { useQuery } from "react-query";
import { QUERY_KEY } from "../../../../types/GenericType";
import { useState } from "react";
import { Alert, Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import moment, { Moment } from "moment";
import ColorSelection from "../../../../components/Field/ColorSelection";
import {
  LABEL_TASKS_DUE_DATE,
  LABEL_TASKS_START_DATE,
} from "../../../../types/MyTasksType";

const SettingProjectDetails = () => {
  const [temp, setTemp] = useState<ProjectDetails>({
    projectId: "",
    projectProfile: {
      projectName: "",
      avatarColor: "",
    },
    views: [],
  });
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    projectId: "",
    projectProfile: {
      projectName: "",
      avatarColor: "",
    },
    views: [],
  });
  const projectId = useSelector((state: RootState) => state.modal.projectId);

  const {
    isLoading: projectIsLoading,
    isError: projectIsError,
    refetch: projectRefetch,
    data: projectData,
  } = useQuery(
    QUERY_KEY.PROJECTINFO_SETTING,
    () => projectApi.getProjectDetails(projectId as string),
    {
      refetchOnWindowFocus: false,
      onSuccess(data) {
        console.log(data);
        setTemp(data);
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

  const handleStartDate = (startDate: Moment | null) => {
    if (!startDate) return;

    setProjectDetails((prev) => ({
      ...prev,
      startDate: startDate ? startDate.toString() : "",
    }));
  };

  const handleEndDate = (dueDate: Moment | null) => {
    if (!dueDate) return;
    setProjectDetails((prev) => ({
      ...prev,
      dueDate: dueDate.toString(),
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

  const handleCheckIsdirty2 = (): boolean => {
    return JSON.stringify(temp) === JSON.stringify(projectDetails);
  };

  if (projectIsLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      {projectIsError ? (
        <Alert severity="error" className="my-8">
          Something went wrong
          <Button
            size="small"
            className="normal-case"
            onClick={() => projectRefetch()}
          >
            Try Again
          </Button>
        </Alert>
      ) : null}
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
            placeholder={PLACHOLDER_INPUT_PROJECT}
            value={projectDetails?.projectProfile.projectName as string}
            handleProjectName={handleProjectName}
          />
          <ColorSelection
            handleColor={handleColor}
            selectColor={projectDetails.projectProfile.avatarColor}
          />
        </div>
      </div>

      <DatePickerRow
        title={LABEL_TASKS_START_DATE}
        date={moment(projectDetails?.startDate)}
        handleSetDate={handleStartDate}
        isClearabler={false}
      />
      <DatePickerRow
        title={LABEL_TASKS_DUE_DATE}
        date={moment(projectDetails?.dueDate)}
        handleSetDate={handleEndDate}
        isClearabler={false}
      />

      <div className="my-4">
        <CreateProjectButtonComp
          title={"Save"}
          disable={handleCheckIsdirty2()}
          isCreating={false}
          handleChange={() => {}}
        />
      </div>
    </>
  );
};

export default SettingProjectDetails;
