import { IconButton } from "@mui/material";
import {
  Invite,
  MemberSetting,
  RoleProject,
} from "../../../../types/ProjectType";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ConfirmDelete from "../../../../components/Modal/ConfirmDelete";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import projectApi from "../../../../libs/projectApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/store";

type InviteItemProps = {
  invite: Invite;
  roles: RoleProject[];
};

const InviteItem = ({ invite, roles }: InviteItemProps) => {
  const queryClient = useQueryClient();
  const projectId = useSelector((state: RootState) => state.modal.projectId);
  const [open, setOpen] = useState<boolean>(false);
  const selectedRoleName = roles.find(
    (role) => role.roleId === invite.inviteRoleId
  )?.roleName;

  const mutation = useMutation({
    mutationFn: (inviteId: string) =>
      projectApi.deleteInviteMember(projectId as string, inviteId),
    onSuccess(data: MemberSetting) {
      setOpen(false);
      queryClient.setQueryData([QUERY_KEY.MEMBERS_SETTING, projectId], data);
      toast.success("Invite Member success");
    },
    onError() {
      toast.error("somthin went wrong");
    },
  });

  return (
    <div className="flex justify-between w-full my-2 items-center">
      <div className="grow flex gap-4 items-start text-gray-4 00">
        <div>
          <h4>{`${invite.inviteEmail} (invite sent)`}</h4>
        </div>
      </div>

      <button
        className="flex justify-center items-center rounded-md bg-main text-gray-200 p-2 "
        disabled
      >
        <h4>{`${selectedRoleName}`}</h4>
      </button>

      <div>
        <IconButton onClick={() => setOpen(true)}>
          <DeleteForeverIcon />
        </IconButton>
      </div>

      {open ? (
        <ConfirmDelete
          isDeleting={false}
          handleClose={() => setOpen(false)}
          handleDelete={() => mutation.mutate(invite.inviteId)}
        />
      ) : null}
    </div>
  );
};

export default InviteItem;
