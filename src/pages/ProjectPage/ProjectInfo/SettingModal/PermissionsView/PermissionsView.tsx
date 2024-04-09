import { Divider, Menu, MenuItem, Switch } from "@mui/material";
import { useState } from "react";

const PermissionsView = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  return (
    <>
      <div className="flex gap-4 items-center">
        <p className="my-4"> Select Role for manage a permissions :</p>
        <div className="items-center">
          <button
            className="flex justify-center items-center rounded-md bg-white px-8 "
            onClick={(e) => setAnchorElUser(e.currentTarget)}
          >
            -
          </button>
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
          >
            <MenuItem className="flex w-full bg-black">Members</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="w-full rounded-md border-opacity-5 border-2 p-4">
        <div className=" grid grid-cols-1 gap-4">
          <h1 className="text-xl font-bold">Owner</h1>

          <div>
            <p className="font-bold">Members</p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex items-center  justify-between">
                <p>Add Role</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center  justify-between">
                <p>Add Role</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center  justify-between">
                <p>Add Role</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <p className="font-bold">Project Permission</p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex items-center  justify-between">
                <p>Edit Profile</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center  justify-between">
                <p>Manage Views</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <p className="font-bold">Tasks Permission</p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex items-center  justify-between">
                <p>Add Tasks</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center  justify-between">
                <p>Delete Tasks</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center  justify-between">
                <p>Edit Tasks</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center  justify-between">
                <p>Manage Process</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Divider />

          <div>
            <p className="font-bold">Role Permission</p>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="flex items-center justify-between">
                <p>Add New Role</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <p>Edit Role</p>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <p>Delete Role</p>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PermissionsView;
