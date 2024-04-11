import { useState } from "react";
import { Divider, Menu, MenuItem, Switch } from "@mui/material";
import { MOCK_ROLE, Role } from "../../../../../types/Permission";
import CreateProjectButtonComp from "../../../../../components/Button/CreateProjectButtonComp";

type PermissionsViewProps = {
  roles: Role[];
};

const PermissionsView = ({ roles }: PermissionsViewProps) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [selectedRole, setSelectedRole] = useState<Role>(roles[0]);

  const handleSelectRole = (role: Role) => {
    setAnchorElUser(null);
    setSelectedRole(role);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <p className="my-2"> Select Role for managing permissions:</p>
        <div className="items-center">
          <button
            className="flex justify-center items-center rounded-md bg-white p-2 border-2 "
            onClick={(e) => setAnchorElUser(e.currentTarget)}
          >
            {selectedRole?.roleName}
          </button>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            {roles.map((role) => (
              <MenuItem
                key={role.roleId}
                onClick={() => handleSelectRole(role)}
                className="flex w-full bg-black"
              >
                {role.roleName}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <div className="w-full rounded-md border-opacity-5 border-2 p-4">
        {MOCK_ROLE.map((role) => {
          if (role.roleId !== selectedRole.roleId) return null;
          return (
            <div key={role.roleId} className=" grid grid-cols-1 gap-4">
              <h1 className="text-xl font-bold">{role.roleName}</h1>

              <div>
                <p className="font-bold">Members</p>
                <div className="grid grid-cols-3 gap-x-4">
                  {Object.entries(role.permission.member).map(
                    ([permission, value]) => (
                      <div
                        key={permission}
                        className="flex items-center justify-between"
                      >
                        <p>{permission}</p>
                        <Switch
                          disabled={
                            role.roleName === "Owner" ||
                            role.roleName === "Member"
                          }
                          defaultChecked={value}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <Divider />
              <div>
                <p className="font-bold">Project Permission</p>
                <div className="grid grid-cols-3 gap-x-4">
                  {Object.entries(role.permission.project).map(
                    ([permission, value]) => (
                      <div
                        key={permission}
                        className="flex items-center justify-between"
                      >
                        <p>{permission}</p>
                        <Switch
                          disabled={
                            role.roleName === "Owner" ||
                            role.roleName === "Member"
                          }
                          defaultChecked={value}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <Divider />
              <div>
                <p className="font-bold">Tasks Permission</p>
                <div className="grid grid-cols-3 gap-x-4">
                  {Object.entries(role.permission.tasks).map(
                    ([permission, value]) => (
                      <div
                        key={permission}
                        className="flex items-center justify-between"
                      >
                        <p>{permission}</p>
                        <Switch
                          disabled={
                            role.roleName === "Owner" ||
                            role.roleName === "Member"
                          }
                          defaultChecked={value}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
              <Divider />
              <div>
                <p className="font-bold">Role Permission</p>
                <div className="grid grid-cols-3 gap-x-4">
                  {Object.entries(role.permission.role).map(
                    ([permission, value]) => (
                      <div
                        key={permission}
                        className="flex items-center justify-between"
                      >
                        <p>{permission}</p>
                        <Switch
                          disabled={
                            role.roleName === "Owner" ||
                            role.roleName === "Member"
                          }
                          defaultChecked={value}
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div className="my-4">
          <CreateProjectButtonComp
            title={"Save"}
            disable={false}
            isCreating={false}
            handleChange={() => {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PermissionsView;
