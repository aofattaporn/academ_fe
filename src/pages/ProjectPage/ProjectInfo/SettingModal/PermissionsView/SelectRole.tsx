import { Menu, MenuItem } from "@mui/material";
import { Role } from "../../../../../types/Permission";

type SelectRoleProps = {
  roles: Role[];
  roleName: string;
  anchorEl: null | HTMLElement;
  handleSelect: (role: Role) => void;
  handleSetAnchorElUser: (element: null | HTMLElement) => void;
};

const SelectRole = ({
  roles,
  roleName,
  anchorEl,
  handleSelect,
  handleSetAnchorElUser,
}: SelectRoleProps) => {
  return (
    <div className="items-center">
      <button
        className="flex justify-center items-center rounded-md bg-white p-2 border-2 "
        onClick={(e) => handleSetAnchorElUser(e.currentTarget)}
      >
        {roleName}
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleSetAnchorElUser(null)}
      >
        {roles.map((role) => (
          <MenuItem
            key={role.roleId}
            onClick={() => handleSelect(role)}
            className="flex w-full bg-black"
          >
            {role.roleName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SelectRole;
