import { AvatarGroup, Tooltip, Avatar, Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { openModal } from "../../../../stores/modalSlice/modalSlice";
import { FullMember, PROJECT_SETTING } from "../../../../types/ProjectType";
import Members from "./MemberView/Members";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

type ProjectMemberProps = {
  members: FullMember[];
};

const ProjectMember = ({ members }: ProjectMemberProps) => {
  const { projectId } = useParams();
  const dispatch = useDispatch();

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
  );
};

export default ProjectMember;
