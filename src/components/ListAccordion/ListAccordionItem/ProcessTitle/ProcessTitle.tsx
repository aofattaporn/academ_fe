import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import ColorSelection from "../../../Field/ColorSelection";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  BTN_TASKS_CANCEL,
  BTN_TASKS_SAVE,
} from "../../../../types/MyTasksType";
import TasksButton from "../../../Button/TasksButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { QueryClient, useMutation } from "react-query";
import { toast } from "react-toastify";
import projectApi from "../../../../libs/projectApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import { useParams } from "react-router-dom";
import { Project } from "../../../../types/ProjectType";
import ConfirmDelete from "../../../Modal/ConfirmDelete";
import CantDeleteModal from "../../../Modal/CantDeleteModal";

type ProcessTitleProps = {
  handleToggle: () => void;
  isToggle: boolean;
  tasksLength: number;
  processId: string;
  processColor: string;
  processName: string;
};

const ProcessTitle = ({
  handleToggle,
  isToggle,
  tasksLength,
  processId,
  processColor,
  processName,
}: ProcessTitleProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [originalColor, setOriginalColor] = useState<string>(processColor);
  const [originalProcess, setOriginalProcess] = useState<string>(processName);

  const [tempColor, setTempColor] = useState<string>(processColor);
  const [tempProcess, setTempProcess] = useState<string>(processName);
  const inputRef = useRef<HTMLInputElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { projectId } = useParams<string>();
  const queryClient = new QueryClient();
  const [isConfirmDelete, setConfirmDelete] = useState<boolean>(false);

  const updateProcess = useMutation({
    mutationFn: () =>
      projectApi.updateProcess(projectId as string, processId, {
        processId: processId,
        processName: tempProcess,
        processColor: tempColor,
      }),
    onSuccess: (data: Project) => {
      setIsEdit(false);
      setAnchorElUser(null);
      setOriginalProcess(tempProcess);
      setOriginalColor(tempColor);
      queryClient.setQueryData([QUERY_KEY.PROJECR, projectId], data);
      toast.success("Update process success");
    },
    onError: () => {
      toast.error("Failed to update project details");
    },
  });

  const deleteProcess = useMutation({
    mutationFn: () => projectApi.deleteProcess(projectId as string, processId),
    onSuccess: (data: Project) => {
      window.location.reload();
    },
    onError: () => {
      toast.error("Failed to update project details");
    },
  });

  const handleButtonClick = () => {
    setIsEdit(true);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleCancelEdit = () => {
    setAnchorElUser(null);
    setTempProcess(processName);
    setTempColor(processColor);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <div>
        <button className="flex gap-4 w-full group/process">
          <div
            style={{ background: tempColor }}
            className={`w-4 h-4 flex justify-center items-center  p-4 rounded-md text-white
      ${isToggle ? "rotate-180" : "rotate-90"} `}
          >
            <ExpandLessIcon />
          </div>
          <div>
            <div className="flex items-center w-full gap-8">
              <div
                style={{ background: tempColor }}
                className="h-4 w-2 py-4 rounded-sm"
              ></div>

              <input
                ref={inputRef}
                value={tempProcess}
                onChange={(e) => setTempProcess(e.target.value)}
                className="flex justify-center bg-transparent bottom-0 text-xl font-bold
              border-none focus:outline-none text-dark"
              />
              <div className="flex gap-4">
                <TasksButton
                  title={BTN_TASKS_CANCEL}
                  isSaving={updateProcess.isLoading}
                  handleSave={handleCancelEdit}
                />
                <TasksButton
                  title={BTN_TASKS_SAVE}
                  isSaving={updateProcess.isLoading}
                  handleSave={updateProcess.mutate}
                />
              </div>
            </div>
            <div className="ml-8">
              <ColorSelection
                disable={false}
                handleColor={(color: string) => setTempColor(color)}
                selectColor={tempColor}
              />
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <button className="flex gap-4 w-full group/process" onClick={handleToggle}>
      <div
        style={{ background: originalColor }}
        className={`w-4 h-4 flex justify-center items-center  p-4 rounded-md text-white
        ${isToggle && anchorElUser === null ? "rotate-180" : "rotate-90"} `}
      >
        <ExpandLessIcon />
      </div>
      <div className="flex items-center w-full gap-8">
        <div
          style={{ background: originalColor }}
          className="h-4 w-2 py-4 rounded-sm"
        ></div>

        <p className="text-xl font-bold">{originalProcess}</p>
        <div className=" group-hover/process:visible invisible">
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setAnchorElUser(e.currentTarget);
            }}
          >
            <MoreVertIcon fontSize="small" />
          </IconButton>

          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <MenuItem
              className="flex gap-4"
              onClick={(e) => {
                e.stopPropagation();
                handleButtonClick();
              }}
            >
              <EditIcon />
              <p>Rename </p>
            </MenuItem>
            <MenuItem
              className="flex gap-4"
              onClick={(e) => {
                e.stopPropagation();
                setConfirmDelete(true);
              }}
            >
              <DeleteForeverIcon />
              <p>Delete</p>
            </MenuItem>
          </Menu>
        </div>
      </div>

      {isConfirmDelete && tasksLength === 0 ? (
        <ConfirmDelete
          handleDelete={() => deleteProcess.mutate()}
          handleClose={() => setConfirmDelete(false)}
          isDeleting={deleteProcess.isLoading}
        />
      ) : null}

      {isConfirmDelete && tasksLength !== 0 ? (
        <CantDeleteModal handleClose={() => setConfirmDelete(false)} />
      ) : null}
    </button>
  );
};

export default ProcessTitle;
