import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AvatarProject from "../../../components/AvatarProject/AvatarProject";
import { PROJECT_SETTING, Project, Size } from "../../../types/ProjectType";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import TuneIcon from "@mui/icons-material/Tune";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveIcon from "@mui/icons-material/Archive";
import PeopleIcon from "@mui/icons-material/People";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../../stores/modalSlice/modalSlice";
import SettingProjectDetails from "./SettingModal/ProjectDetails/SettingProjectDetails";
import ManageProjectPermissions from "./SettingModal/RoleAndPermissions/ManageProjectPermissions";
import Members from "./SettingModal/MemberView/Members";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import projectApi from "../../../libs/projectApi";
import ConfirmDelete from "../../../components/Modal/ConfirmDelete";
import ConfirmArchive from "../../../components/Modal/ConfirmArchive";
import { QUERY_KEY } from "../../../types/GenericType";
import moment from "moment";

type ProjectInfoProps = {
  projectData: Project;
};

const ProjectInfo = ({ projectData }: ProjectInfoProps) => {
  const { projectId } = useParams();
  const { projectProfile, views, members } = projectData.projectInfo;
  const location = useLocation();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState<boolean>(false);
  const [isOpenArchive, setIsOpenArchive] = useState<boolean>(false);

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const renderViews = () => {
    return views.map((view, index) => (
      <Link
        to={view}
        key={index}
        className={`w-24 flex justify-center cursor-pointer
          ${index === 0 ? "rounded-tl-md" : "rounded-none"}
          ${index === views.length - 1 ? "rounded-tr-md" : "rounded-none"}
          ${
            location.pathname.includes(view)
              ? "bg-primary text-white"
              : "bg-primary-subtle"
          }
        `}
      >
        {view}
      </Link>
    ));
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

  const handleOpenMembers = () => {
    dispatch(
      openModal({
        title: PROJECT_SETTING.MEMBERS,
        children: <Members />,
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
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-4 pt-2">
        <AvatarProject
          projectName={projectProfile.projectName}
          color={projectProfile.avatarColor}
          size={Size.medium}
          isLoading={false}
        />

        <div>
          <div className="flex gap-4 items-center w-full ">
            <h2 className="text-xl font-bold">{projectProfile.projectName}</h2>

            <div className="flex items-center w-full gap-3">
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
              </Box>

              {projectData.projectInfo.projectEndDate &&
              moment(projectData.projectInfo.projectEndDate).isSame(
                moment(),
                "day"
              ) &&
              !projectData.projectInfo.isArchive ? (
                <div className="text-sm p-1 px-6 rounded-md border-2 border-red-400 text-red-400">
                  Project Deadline today
                </div>
              ) : null}
              {projectData.projectInfo.projectEndDate &&
              moment(projectData.projectInfo.projectEndDate).isBefore(
                moment(),
                "day"
              ) &&
              !projectData.projectInfo.isArchive ? (
                <div className="text-sm p-1 px-6 rounded-md border-2 border-red-400 text-red-400">
                  Project Deadline passed
                </div>
              ) : null}
              {projectData.projectInfo.isArchive ? (
                <div className="text-sm p-1 px-6 rounded-md border-2 border-success text-success">
                  Archived
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex gap-1 mt-2">{renderViews()}</div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <AvatarGroup
          className="cursor-pointer"
          onClick={handleOpenMembers}
          sx={{ flexDirection: "row-reverse" }}
        >
          {members.map((member, index) => {
            return (
              <Tooltip key={index} title={member.userName}>
                <Avatar
                  style={{ backgroundColor: member.avatarColor }}
                  key={index}
                  alt={member.userName}
                >
                  {member.userName.at(0)}
                </Avatar>
              </Tooltip>
            );
          })}
        </AvatarGroup>
        <Button
          onClick={handleOpenMembers}
          startIcon={<PeopleIcon />}
          size="medium"
          sx={{
            textTransform: "none",
            borderColor: "#AF8AE2",
            color: "#AF8AE2",
            "&:hover": {
              color: "#FFFFF",
              borderColor: "#AF8AE2",
            },
          }}
          variant="outlined"
        >
          Share
        </Button>
      </div>

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
    </div>
  );
};

export default ProjectInfo;
