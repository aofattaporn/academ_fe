import { IconButton } from "@mui/material";
import { Invite } from "../../../../types/ProjectType";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type InviteItemProps = {
  invite: Invite;
};

const InviteItem = ({ invite }: InviteItemProps) => {
  return (
    <div className="flex justify-between w-full my-2 items-center">
      <div className="grow flex gap-4 items-start text-gray-4 00">
        <div>
          <h4>{`${invite.inviteMail} (invite sent)`}</h4>
        </div>
      </div>

      <div>
        <IconButton onClick={() => {}} disabled={!true}>
          <DeleteForeverIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InviteItem;
