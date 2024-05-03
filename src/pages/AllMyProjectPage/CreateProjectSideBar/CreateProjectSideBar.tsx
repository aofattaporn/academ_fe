import CreateProjectButtonComp from "../../../components/Button/CreateProjectButtonComp";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, TextField } from "@mui/material";
import AllViewToggle from "./ViewToggle/AllViewToggle";
import {
  BTN_CREATE_PROJECT,
  PLACHOLDER_INPUT_PROJECT,
} from "../../../types/ProjectType";
import useCreateProject from "../../../hooks/projectHook/useCreateProject";
import DatePickerRow from "../../../components/DatePicker/DatePickerRow";
import moment from "moment";

type CreateProjectSideBarProps = {
  isOpen: boolean;
  handleClose: () => void;
};
const CreateProjectSideBar = ({
  isOpen,
  handleClose,
}: CreateProjectSideBarProps) => {
  const {
    mutation,
    projectName,
    endDate,
    startDate,
    viewsSelected,
    classtName,
    handleSetProjectName,
    handleSetEndDate,
    handleSetSelected,
    handleSetClassName,
    handleSetStartDate,
  } = useCreateProject({ handleClose });

  return (
    <div
      className={`duration-700 overflow-x-hidden bg-white max-h-full shadow-3xl 
        ${isOpen ? "md:w-4/6 lg:w-2/6 w-full" : "w-0"}`}
    >
      <div className="py-8 pl-4 pr-12">
        <div className="flex gap-4 items-start">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis">
            <h2 className="text-xl min-h-2 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
              Create My Project
            </h2>
            <p className="text-sm text-gray-400">
              Start building your next big idea with ease.
            </p>
            <div className="my-8">
              <p className="text-md text-dark my-2">
                Project Name <span className="text-error">*</span>
              </p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ borderRadius: "200px" }}
                placeholder={PLACHOLDER_INPUT_PROJECT}
                fullWidth
                value={projectName}
                onChange={(e) => handleSetProjectName(e.target.value)}
              />
            </div>
            <div className="my-8">
              <p className="text-md text-dark my-2">
                Class Name <span className="text-error">*</span>
              </p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                sx={{ borderRadius: "200px" }}
                placeholder={"Enter Class Name"}
                fullWidth
                value={classtName}
                onChange={(e) => handleSetClassName(e.target.value)}
              />
            </div>
            <div className="my-8">
              <p className="text-md text-dark my-2">
                Views defualt <span className="text-error">*</span>
              </p>
              <AllViewToggle
                viewsSelected={viewsSelected}
                handleSelected={handleSetSelected}
                disable={false}
              />
            </div>
            <div className="my-4">
              <DatePickerRow
                isDisable={true}
                title={"Start date "}
                date={startDate ? moment(startDate) : null}
                handleSetDate={handleSetStartDate}
                isClearabler={true}
              />
            </div>
            <div className="my-4">
              <DatePickerRow
                isDisable={true}
                title={"End date "}
                date={endDate ? moment(endDate) : null}
                handleSetDate={handleSetEndDate}
                isClearabler={true}
              />
            </div>

            <div className="mt-8">
              <CreateProjectButtonComp
                title={BTN_CREATE_PROJECT}
                disable={viewsSelected.length === 0 || projectName.length === 0}
                isCreating={mutation.isLoading}
                handleChange={mutation.mutate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectSideBar;
