import TextFeildInputComp from "../../../../../components/Field/TextFeildInputComp";
import {
  PLACHOLDER_INPUT_PROJECT,
  Size,
} from "../../../../../types/ProjectType";
import CreateProjectButtonComp from "../../../../../components/Button/CreateProjectButtonComp";
import { Alert, Button, CircularProgress } from "@mui/material";
import AvatarProject from "../../../../../components/AvatarProject/AvatarProject";
import moment from "moment";
import ColorSelection from "../../../../../components/Field/ColorSelection";
import {
  BTN_TASKS_SAVE,
  LABEL_TASKS_DUE_DATE,
  LABEL_TASKS_START_DATE,
} from "../../../../../types/MyTasksType";
import useSettingProjectDetails from "../../../../../hooks/projectHook/useSettingProjectDetails";
import DatePickerRow from "../../../../../components/DatePicker/DatePickerRow";

const SettingProjectDetails = () => {
  const {
    mutation,
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectDetails,
    projectRefetch,
    handleProjectName,
    handleColor,
    handleStartDate,
    handleEndDate,
    handleCheckIsdirty,
  } = useSettingProjectDetails();

  if (projectIsLoading) {
    return (
      <div className="flex justify-center">
        <CircularProgress />;
      </div>
    );
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

      {projectIsSuccess ? (
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
            isDisable={true}
          />
          <DatePickerRow
            title={LABEL_TASKS_DUE_DATE}
            date={moment(projectDetails?.dueDate)}
            handleSetDate={handleEndDate}
            isClearabler={false}
            isDisable={true}
          />

          <div className="my-4">
            <CreateProjectButtonComp
              title={BTN_TASKS_SAVE}
              disable={handleCheckIsdirty()}
              isCreating={mutation.isLoading}
              handleChange={mutation.mutate}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default SettingProjectDetails;
