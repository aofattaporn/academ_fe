import { useState } from "react";
import {
  Avatar,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  AllMemberAndPermission,
  FullMember,
  RoleProject,
} from "../../../../../../types/ProjectType";
import { useMutation, useQueryClient } from "react-query";
import projectApi from "../../../../../../libs/projectApi";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../stores/store";
import { toast } from "react-toastify";
import { ErrorCustom, QUERY_KEY } from "../../../../../../types/GenericType";
import ConfirmDelete from "../../../../../../components/Modal/ConfirmDelete";
import { MembersPermission } from "../../../../../../types/Permission";

type MemberItemProps = {
  member: FullMember;
  roles: RoleProject[];
  memberPermission: MembersPermission;
};

const MemberItem = ({ member, roles, memberPermission }: MemberItemProps) => {
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [selectedRole, setSelectedRole] = useState<string>(member.roleId);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

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
    onSuccess(data: AllMemberAndPermission) {
      const newRole = data.allMemberProject.members.find(
        (member2) => member2.userId === member.userId
      );
      setSelectedRole(newRole?.roleId as string);
      queryClient.setQueryData([QUERY_KEY.MEMBERS_SETTING, projectId], data);
      toast.success("Change role success");
    },
    onError(error: ErrorCustom) {
      toast.error(error.description);
    },
  });

  const removeMemberMutation = useMutation({
    mutationFn: async ({ memberId }: { memberId: string }) =>
      await projectApi.removeMember(projectId as string, memberId),
    onSuccess(data: AllMemberAndPermission) {
      setOpen(false);
      queryClient.setQueryData([QUERY_KEY.MEMBERS_SETTING, projectId], data);
      toast.success("Remove member success");
    },
    onError(error: ErrorCustom) {
      toast.error(error.description);
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
          className={`flex justify-center items-center rounded-md p-2
          ${
            !memberPermission.addRole
              ? "bg-main text-gray-300"
              : "bg-white border-2"
          } `}
          disabled={!memberPermission.addRole}
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
        <IconButton
          onClick={() => setOpen(true)}
          disabled={!memberPermission.remove}
        >
          <DeleteForeverIcon />
        </IconButton>
      </div>

      {open ? (
        <ConfirmDelete
          isDeleting={false}
          handleClose={() => setOpen(false)}
          handleDelete={() =>
            removeMemberMutation.mutate({ memberId: member.userId })
          }
        />
      ) : null}
    </div>
  );
};

export default MemberItem;
