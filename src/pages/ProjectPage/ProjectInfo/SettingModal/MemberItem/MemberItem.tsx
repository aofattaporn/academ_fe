import { useState } from "react";
import {
  Avatar,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { FullMember, RoleProject } from "../../../../../types/ProjectType";
import { useMutation } from "react-query";
import projectApi from "../../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import { toast } from "react-toastify";

type MemberItemProps = {
  member: FullMember;
  roles: RoleProject[];
};

const MemberItem = ({ member, roles }: MemberItemProps) => {
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [selectedRole, setSelectedRole] = useState<string>(member.roleId);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenAnchorEl = (element: null | HTMLElement) => {
    setAnchorEl(element);
  };

  const mutation = useMutation({
    mutationFn: ({ memberId, roleId }: { memberId: string; roleId: string }) =>
      projectApi.changeRoleMember(projectId as string, memberId, roleId),
    onSuccess(data: { roleId: string }) {
      console.log(data.roleId);
      setSelectedRole(data.roleId);
      toast.success("Change role success");
    },
  });

  const handleClick = (roleId: string, memberId: string) => {
    handleOpenAnchorEl(null);
    mutation.mutate({ roleId, memberId });
  };

  const selectedRoleName = roles.find((role) => role.roleId === selectedRole)
    ?.roleName;

  return (
    <div className="flex justify-between w-full my-4">
      <div className="grow flex gap-4 items-start">
        <Avatar sx={{ width: 32, height: 32 }}>
          {member.userName.charAt(0).toUpperCase()}
        </Avatar>
        <div>
          <h4>{member.userName}</h4>
          <p className="text-gray-300">{member.email}</p>
        </div>
      </div>

      <div className="items-center">
        <button
          className="flex justify-center items-center rounded-md bg-white p-2 border-2 "
          onClick={(e) => handleOpenAnchorEl(e.currentTarget)}
        >
          {mutation.isLoading ? (
            <CircularProgress size={20} />
          ) : (
            <p>{selectedRoleName}</p>
          )}
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleOpenAnchorEl(null)}
        >
          {roles.map((role, index) => (
            <MenuItem
              key={index}
              onClick={() => handleClick(member.userId, role.roleId)}
              className="flex w-full bg-black"
            >
              {role.roleName}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div>
        <IconButton onClick={() => {}} disabled={!true}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default MemberItem;
