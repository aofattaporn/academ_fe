import { Link, useLocation, useParams } from "react-router-dom";
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
import SettingProjectDetails from "./SettingModal/SettingProjectDetails";
import ManageProjectPermissions from "./SettingModal/ManageProjectPermissions";
import Members from "./SettingModal/Members";

type ProjectInfoProps = {
  projectData: Project;
};

const ProjectInfo = ({ projectData }: ProjectInfoProps) => {
  const { projectId } = useParams();
  const { projectProfile, views, members } = projectData.projectInfo;
  const location = useLocation();
  const dispatch = useDispatch();

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
          <div className="flex gap-4 items-center">
            <h2 className="text-xl font-bold">{projectProfile.projectName}</h2>

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
                <MenuItem disabled>
                  <ListItemIcon>
                    <ArchiveIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive</ListItemText>
                </MenuItem>
                <MenuItem color="error">
                  <ListItemIcon>
                    <DeleteOutlineIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText> Delete Project</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </div>
          <div className="flex gap-1 mt-2">{renderViews()}</div>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <AvatarGroup
          className=" cursor-pointer"
          onClick={handleOpenMembers}
          sx={{ flexDirection: "row-reverse" }}
        >
          {members.map((member, index) => {
            return (
              <Tooltip key={index} title={member.userName}>
                <Avatar key={index} alt={member.userName}>
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
    </div>
  );
};

export default ProjectInfo;
