import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { FullMember, Role } from "../../../../../types/ProjectType";

type MemberItemProps = {
  member: FullMember;
  roles: Role[];
};

const MemberItem = ({ member, roles }: MemberItemProps) => {
  const [selectedRole, setSelectedRole] = useState<string>(member.roleId);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenAnchorEl = (element: null | HTMLElement) => {
    setAnchorEl(element);
  };

  const handleClick = (roleId: string) => {
    setSelectedRole(roleId);
    handleOpenAnchorEl(null);
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
          {selectedRoleName}
        </button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => handleOpenAnchorEl(null)}
        >
          {roles.map((role, index) => (
            <MenuItem
              key={index}
              onClick={() => handleClick(role.roleId)}
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
