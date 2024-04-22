import { IconButton } from "@mui/material";
import { Invite, RoleProject } from "../../../../types/ProjectType";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type InviteItemProps = {
  invite: Invite;
  roles: RoleProject[];
};

const InviteItem = ({ invite, roles }: InviteItemProps) => {
  const selectedRoleName = roles.find(
    (role) => role.roleId === invite.inviteRoleId
  )?.roleName;

  return (
    <div className="flex justify-between w-full my-2 items-center">
      <div className="grow flex gap-4 items-start text-gray-4 00">
        <div>
          <h4>{`${invite.inviteEmail} (invite sent)`}</h4>
        </div>
      </div>

      <button
        className="flex justify-center items-center rounded-md bg-white p-2 border-2 "
        disabled
      >
        <h4>{`${selectedRoleName}`}</h4>
      </button>

      <div>
        <IconButton onClick={() => {}} disabled={!true}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InviteItem;
