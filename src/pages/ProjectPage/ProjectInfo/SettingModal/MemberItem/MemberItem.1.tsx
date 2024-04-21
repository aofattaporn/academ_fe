import { useState } from "react";
import {
  Avatar,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { MemberSetting } from "../../../../../types/ProjectType";
import { useMutation, useQueryClient } from "react-query";
import projectApi from "../../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import { toast } from "react-toastify";
import { MemberItemProps } from "./MemberItem";

export const MemberItem = ({ member, roles }: MemberItemProps) => {
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [selectedRole, setSelectedRole] = useState<string>(member.roleId);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenAnchorEl = (element: null | HTMLElement) => {
    setAnchorEl(element);
  };

  const mutation = useMutation({
    mutationFn: async ({
      memberId,
      roleId,
    }: {
      memberId: string;
      roleId: string;
    }) =>
      await projectApi.changeRoleMember(projectId as string, memberId, roleId),
    onSuccess(data: MemberSetting) {
      queryClient.setQueryData(
        [QUERY_KEY.Tasks, tasksData.tasksId],
        updatedTasks
      );
      toast.success("Change role success");
    },
  });

  const handleClick = (memberId: string, roleId: string) => {
    handleOpenAnchorEl(null);
    mutation.mutate({ memberId, roleId });
  };

  const selectedRoleName = roles.find((role) => role.roleId === selectedRole)
    ?.roleName;

  return (
    <div className="flex justify-between w-full my-4">
      <div className="grow flex gap-4 items-start">
        <Avatar
          sx={{ width: 32, height: 32, backgroundColor: member.avatarColor }}
        >
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
