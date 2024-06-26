import { Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmDelete from "../../../Modal/ConfirmDelete";
import { useMutation, useQueryClient } from "react-query";
import tasksApi from "../../../../libs/tasksApi";
import { ErrorCustom, QUERY_KEY } from "../../../../types/GenericType";
import { Tasks } from "../../../../types/MyTasksType";
import { toast } from "react-toastify";
import { openDetails } from "../../../../stores/projectSlice/tastsDetailsSlice";
import { useDispatch } from "react-redux";

type SettingTasksTileProps = {
  tasksId: string;
  isVisible: boolean;
  handleClose?: () => void;
};
const SettingTasksTile = ({ tasksId, isVisible }: SettingTasksTileProps) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAnchorElUser(null);
    mutation.reset();
  };

  const mutation = useMutation({
    mutationFn: async () => await tasksApi.deleteTasksById(tasksId),
    onSuccess: () => {
      queryClient.setQueryData(
        QUERY_KEY.ALL_TASKS,
        (oldData: Tasks[] | undefined) => {
          const newData = oldData
            ? oldData.filter((task) => task.tasksId !== tasksId)
            : [];
          return newData;
        }
      );
      setOpen(false);
      setAnchorElUser(null);
      dispatch(openDetails(false));
      toast.success("Delete tasks success");
    },
    onError: (error: ErrorCustom) => {
      toast.error(error.description);
      setOpen(false);
      setAnchorElUser(null);
    },
  });

  return (
    <>
      <div
        className={`${isVisible ? "visible" : "invisible group-hover:visible"}
         text-dark font-roboto`}
      >
        <div
          className="rounded-md"
          onMouseDown={(e) => {
            e.stopPropagation();
            const target = e.currentTarget as HTMLElement;
            setAnchorElUser(target);
          }}
        >
          <MoreVertIcon />
        </div>

        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            className="flex gap-4"
            onMouseDown={(e) => {
              e.stopPropagation();
              handleOpen();
            }}
          >
            <DeleteForeverIcon />
            <p>Delete</p>
          </MenuItem>
        </Menu>
      </div>

      {open ? (
        <ConfirmDelete
          isDeleting={mutation.isLoading}
          handleClose={handleClose}
          handleDelete={mutation.mutate}
        />
      ) : null}
    </>
  );
};

export default SettingTasksTile;
