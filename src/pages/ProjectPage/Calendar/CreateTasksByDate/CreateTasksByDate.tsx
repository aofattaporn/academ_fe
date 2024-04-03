import { Backdrop, IconButton, TextareaAutosize } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import { useProjectPermission } from "../../ProjectPage";
import { useState } from "react";
import { Process } from "../../../../types/ProjectType";
import useCreateTasks from "../../../../hooks/tasksHook/useCreateTasks";
import { useParams } from "react-router-dom";
import TasksButton from "../../../../components/Button/TasksButton";
import {
  BTN_TASKS_SAVE,
  LABEL_TASKS_DUE_DATE,
  LABEL_TASKS_START_DATE,
} from "../../../../types/MyTasksType";
import DatePickerRow from "../../../../components/DatePicker/DatePickerRow";
import ProcessDropdown from "../../../../components/Dropdown/ProcessDropdown";

type CreateTasksByDateProps = {
  handleClose: () => void;
};

const CreateTasksByDate = ({ handleClose }: CreateTasksByDateProps) => {
  const { process } = useProjectPermission();
  const { projectId } = useParams<string>();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [myProcess, setMyProcess] = useState<Process | undefined>(
    process?.at(0)
  );

  const { mutation, handleSubmit } = useCreateTasks();

  const handleSelectProcess = (selectProcess: Process) => {
    setMyProcess(selectProcess);
    setAnchorElUser(null);
  };

  const handleSetAnchorElUser = (element: null | HTMLElement) =>
    setAnchorElUser(element);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <div className="bg-white p-8 rounded-md text-dark font-roboto w-5/12 absolute top-40 ">
        <div className="flex justify-end p-2">
          <IconButton onClick={handleClose}>
            <CloseIcon className="text-dark" />
          </IconButton>
        </div>
        <main className=" py-2">
          <TextareaAutosize
            defaultValue={""}
            onChange={(e) => console.log(e.target.value)}
            className="w-full text-3xl font-bold overflow-hidden border-none focus:outline-none px-8"
            autoFocus
          />
          <div className="grid grid-cols-1 gap-2 my-2">
            <ProcessDropdown
              process={myProcess as Process}
              allProcess={process as Process[]}
              anchorElUser={anchorElUser}
              handleSetAnchorElUser={handleSetAnchorElUser}
              handleSelectProcess={handleSelectProcess}
            />
            <DatePickerRow title={LABEL_TASKS_START_DATE} date={moment()} />
            <DatePickerRow title={LABEL_TASKS_DUE_DATE} date={moment()} />
          </div>
        </main>
        <footer className="flex justify-end  rounded-b-md">
          <TasksButton
            title={BTN_TASKS_SAVE}
            isSaving={mutation.isLoading}
            handleSave={() =>
              handleSubmit(projectId as string, myProcess?.processId as string)
            }
          />
        </footer>
      </div>
    </Backdrop>
  );
};

export default CreateTasksByDate;
