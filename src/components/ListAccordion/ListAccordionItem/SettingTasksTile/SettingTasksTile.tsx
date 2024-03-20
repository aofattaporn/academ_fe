import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MouseEvent, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmDelete from "../../../Modal/ConfirmDelete";
import { useMutation, useQueryClient } from "react-query";
import tasksApi from "../../../../libs/tasksApi";
import { ErrorCustom, QUERY_KEY } from "../../../../types/GenericType";
import { Tasks } from "../../../../types/MyTasksType";
import { toast } from "react-toastify";

type SettingTasksTileProps = {
  tasksId: string;
};
const SettingTasksTile = ({ tasksId }: SettingTasksTileProps) => {
  const queryClient = useQueryClient();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

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
    onSuccess: (data: Tasks[]) => {
      queryClient.setQueryData(QUERY_KEY.ALL_TASKS, data);
      setOpen(false);
      setAnchorElUser(null);
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
      <div className="invisible group-hover:visible text-dark font-roboto">
        <IconButton onClick={handleOpenUserMenu}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem className="flex gap-4" onClick={handleOpen}>
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
