import { IconButton, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import projectApi from "../../../../libs/projectApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import { Project } from "../../../../types/ProjectType";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TasksButton from "../../../../components/Button/TasksButton";
import ColorSelection from "../../../../components/Field/ColorSelection";
import {
  BTN_TASKS_CANCEL,
  BTN_TASKS_SAVE,
} from "../../../../types/MyTasksType";
import ConfirmDelete from "../../../../components/Modal/ConfirmDelete";
import CantDeleteModal from "../../../../components/Modal/CantDeleteModal";

type BoardHeaderProps = {
  processColor: string;
  processName: string;
  processId: string;
  tasksLength: number;
};

const BoardHeader = ({
  processColor,
  processName,
  processId,
  tasksLength,
}: BoardHeaderProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const navigate = useNavigate();

  const [tempColor, setTempColor] = useState<string>(processColor);
  const [tempProcess, setTempProcess] = useState<string>(processName);
  const inputRef = useRef<HTMLInputElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { projectId } = useParams<string>();
  const queryClient = useQueryClient();
  const [isConfirmDelete, setConfirmDelete] = useState<boolean>(false);

  const updateProcess = useMutation({
    mutationFn: () =>
      projectApi.updateProcess(
        projectId as string,
        processId,
        {
          processId: processId,
          processName: tempProcess,
          processColor: tempColor,
        },
        "Board"
      ),
    onSuccess: (data: Project) => {
      setIsEdit(false);
      setAnchorElUser(null);
      navigate(`Board`);
      queryClient.setQueryData([QUERY_KEY.PROJECR, projectId], data);
      toast.success("Update process success");
    },
    onError: () => {
      toast.error("Failed to update project details");
    },
  });

  const deleteProcess = useMutation({
    mutationFn: () =>
      projectApi.deleteProcess(projectId as string, processId, "Board"),
    onSuccess: (data: Project) => {
      setConfirmDelete(false);
      queryClient.setQueryData([QUERY_KEY.PROJECR, projectId], data);
      toast.success("Success to delete process");
    },
    onError: () => {
      toast.error("Failed to delete process");
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
      <div className="w-80 min-w-80 px-1 font-roboto text-dark group/create">
        <div className="my-4 shadow-3xl rounded-md bg-main flex items-center gap-4">
          <div style={{ background: tempColor }} className="w-4 h-12"></div>

          <input
            ref={inputRef}
            value={tempProcess}
            onChange={(e) => setTempProcess(e.target.value)}
            className="flex justify-center bg-transparent bottom-0 font-bold
              border-none focus:outline-none text-dark"
          />
        </div>
        <div className="ml-8">
          <ColorSelection
            disable={false}
            handleColor={(color: string) => setTempColor(color)}
            selectColor={tempColor}
          />
        </div>
        <div className="flex gap-4 ml-8">
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
    );
  }

  return (
    <div className="my-4 shadow-3xl rounded-md bg-main flex items-center gap-4 group/process">
      <div style={{ background: processColor }} className="w-4 h-12"></div>
      <div className="flex justify-between items-center w-full">
        <p className=" font-bold">{processName}</p>
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
        </div>
      </div>
    </div>
  );
};

export default BoardHeader;
