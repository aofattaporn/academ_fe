import TextFeildInputComp from "../../../../../components/Field/TextFeildInputComp";
import {
  PLACHOLDER_INPUT_CLASS,
  PLACHOLDER_INPUT_PROJECT,
  Size,
  Views,
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
import AllViewToggle from "../../../../AllMyProjectPage/CreateProjectSideBar/ViewToggle/AllViewToggle";

const SettingProjectDetails = () => {
  const {
    mutation,
    projectData,
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectDetails,
    projectPermission,
    projectRefetch,
    handleProjectName,
    handleColor,
    handleStartDate,
    handleEndDate,
    handleSetSelected,
    haandleClassName,
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
                disable={!projectPermission.editProfile}
                placeholder={PLACHOLDER_INPUT_PROJECT}
                value={projectDetails?.projectProfile.projectName as string}
                handleProjectName={handleProjectName}
              />
              <ColorSelection
                disable={!projectPermission.editProfile}
                handleColor={handleColor}
                selectColor={projectDetails.projectProfile.avatarColor}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 items-center">
            <p className=" col-span-1 bg-main py-2 flex justify-center rounded-md">
              Views
            </p>
            <div className="col-span-2 w-full">
              <AllViewToggle
                disable={!projectPermission.editProfile}
                viewsSelected={projectDetails.views as Views[]}
                handleSelected={handleSetSelected}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center">
            <p className=" col-span-1 bg-main py-2 flex justify-center rounded-md">
              Class Name
            </p>
            <div className="col-span-2 w-full">
              <TextFeildInputComp
                disable={!projectPermission.editProfile}
                placeholder={PLACHOLDER_INPUT_CLASS}
                value={projectDetails?.className as string}
                handleProjectName={haandleClassName}
              />
            </div>
          </div>

          <DatePickerRow
            title={LABEL_TASKS_START_DATE}
            date={
              projectDetails.projectStartDate
                ? moment(projectDetails.projectStartDate)
                : null
            }
            handleSetDate={handleStartDate}
            isClearabler={true}
            isDisable={projectPermission.editProfile}
          />
          <DatePickerRow
            title={LABEL_TASKS_DUE_DATE}
            date={
              projectDetails.projectEndDate
                ? moment(projectDetails.projectEndDate)
                : null
            }
            handleSetDate={handleEndDate}
            isClearabler={true}
            isDisable={projectPermission.editProfile}
          />

          <div className="my-4">
            <CreateProjectButtonComp
              title={BTN_TASKS_SAVE}
              disable={
                JSON.stringify(projectData?.projectDetails) ===
                JSON.stringify(projectDetails)
              }
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
