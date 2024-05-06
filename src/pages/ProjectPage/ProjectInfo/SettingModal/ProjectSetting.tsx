import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { openModal } from "../../../../stores/modalSlice/modalSlice";
import { PROJECT_SETTING, Project } from "../../../../types/ProjectType";
import SettingProjectDetails from "./ProjectDetails/SettingProjectDetails";
import ManageProjectPermissions from "./RoleAndPermissions/ManageProjectPermissions";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ConfirmDelete from "../../../../components/Modal/ConfirmDelete";
import ConfirmArchive from "../../../../components/Modal/ConfirmArchive";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import projectApi from "../../../../libs/projectApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import TuneIcon from "@mui/icons-material/Tune";

type ProjectSettingProps = {
  projectData: Project;
};

const ProjectSetting = ({ projectData }: ProjectSettingProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const [open, setOpen] = useState<boolean>(false);
  const [isOpenArchive, setIsOpenArchive] = useState<boolean>(false);

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleOpenTasksDetails = () => {
    setAnchorElUser(null);
    dispatch(
      openModal({
        title: PROJECT_SETTING.PROJECR_DETAILS,
        children: <SettingProjectDetails />,
        projectId: projectId as string,
      })
    );
  };

  const handleOpenProjectPermissions = () => {
    setAnchorElUser(null);
    dispatch(
      openModal({
        title: PROJECT_SETTING.MANAGE_PROJECT_PERMISSIONS,
        children: <ManageProjectPermissions />,
        projectId: projectId as string,
      })
    );
  };

  const mutation = useMutation({
    mutationFn: () => projectApi.deleteProjectById(projectId as string),
    onSuccess() {
      setOpen(false);
      toast.success("Delete Project success");
      navigate("/projects");
    },
    onError() {
      toast.error("Somthing went wrong");
    },
  });

  const archive = useMutation({
    mutationFn: () =>
      projectApi.archiveProjectById(projectId as string, {
        isArchive: projectData.projectInfo.isArchive,
      }),
    onSuccess(data) {
      setIsOpenArchive(false);
      toast.success("Archive Project success");
      queryClient.setQueryData([QUERY_KEY.PROJECR, projectId], data);
    },
    onError() {
      toast.error("Somthing went wrong");
    },
  });

  return (
    <Box>
      <IconButton onClick={handleOpenUserMenu}>
        <ExpandMoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleOpenTasksDetails}>
          <ListItemIcon>
            <ModeEditOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Edit project Details</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleOpenProjectPermissions}>
          <ListItemIcon>
            <TuneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Manage Role & Permissions</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          disabled={!projectData.projectPermission.archive}
          onClick={() => setIsOpenArchive(true)}
        >
          <ListItemIcon>
            <ArchiveIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Archive</ListItemText>
        </MenuItem>
        <MenuItem
          disabled={!projectData.projectPermission.delete}
          onClick={() => setOpen(true)}
          color="error"
        >
          <ListItemIcon>
            <DeleteOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> Delete Project</ListItemText>
        </MenuItem>
      </Menu>

      {open ? (
        <ConfirmDelete
          isDeleting={mutation.isLoading}
          handleClose={() => setOpen(false)}
          handleDelete={mutation.mutate}
        />
      ) : null}

      {isOpenArchive ? (
        <ConfirmArchive
          isArchiving={archive.isLoading}
          handleClose={() => setIsOpenArchive(false)}
          handleArchive={archive.mutate}
        />
      ) : null}
    </Box>
  );
};

export default ProjectSetting;
