import CloseIcon from "@mui/icons-material/Close";
import { FullMember } from "../../types/ProjectType";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

type MemberDropdownProps = {
  member?: FullMember;
  allMembers: FullMember[];
  anchorElUser: HTMLElement | null;
  handleSetAnchorElUser: (element: null | HTMLElement) => void;
  handleSelectMember: (selectProcess?: FullMember) => void;
};

const MemberDropdown = ({
  member,
  allMembers,
  anchorElUser,
  handleSetAnchorElUser,
  handleSelectMember,
}: MemberDropdownProps) => {
  return (
    <div className=" grid grid-cols-3 gap-4 items-center">
      <p className="bg-main py-2 flex justify-center rounded-md">Asignee</p>
      <div
        className="col-span-2 flex justify-center h-full items-center  rounded-md hover:cursor-pointer"
        id={"Member"}
        onClick={(e) => handleSetAnchorElUser(e.currentTarget)}
      >
        {member ? (
          <div className="flex gap-2 grow-0 items-center overflow-clip">
            <div className=" overflow-x-hidden flex gap-2 w-full">
              <Avatar
                style={{ backgroundColor: member.avatarColor }}
                alt={member.userName}
                sx={{ width: 24, height: 24 }}
              >
                <p className=" text-sm"> {member.userName.at(0)}</p>
              </Avatar>
              <p> {member.userName}</p>
            </div>
            <div className="grid-cols-1">
              <IconButton
                className="grow"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectMember(undefined);
                }}
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            </div>
          </div>
        ) : (
          <p>-</p>
        )}
      </div>
      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser) && anchorElUser?.id === "Member"}
        onClose={() => handleSetAnchorElUser(null)}
      >
        {allMembers
          ? allMembers.map((member, index) => (
              <MenuItem
                key={index}
                className="flex w-full bg-black"
                onClick={() => handleSelectMember(member)}
              >
                <div className="flex items-center gap-4">
                  <div className=" w-4 h-4  rounded-full"></div>
                  <Avatar
                    style={{ backgroundColor: member.avatarColor }}
                    alt={member.userName}
                    sx={{ width: 24, height: 24 }}
                  >
                    {member.userName.at(0)}
                  </Avatar>
                  <p>{member.userName}</p>
                </div>
              </MenuItem>
            ))
          : null}
      </Menu>
    </div>
  );
};

export default MemberDropdown;
