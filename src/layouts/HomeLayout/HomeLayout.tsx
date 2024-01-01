import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, Outlet } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FolderIcon from "@mui/icons-material/Folder";
import ClassIcon from "@mui/icons-material/Class";
import { Divider, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="text-md flex " style={{ height: "100vh" }}>
      <Sidebar collapsed={collapsed} width="220px">
        <div className="my-8 flex justify-around align-middle items-center ">
          {!collapsed && <h1 className=" font-bold">Academ</h1>}
          <IconButton onClick={handleToggleSidebar}>
            <MenuIcon />
          </IconButton>
        </div>
        <Menu>
          <MenuItem icon={<HomeIcon />} component={<Link to={"/"}></Link>}>
            Home
          </MenuItem>
          <MenuItem
            icon={<TaskIcon />}
            component={<Link to={"/myTask"}></Link>}
          >
            My Task
          </MenuItem>
          <MenuItem
            icon={<NotificationsIcon />}
            component={<Link to={"/notification"}></Link>}
          >
            Notification
          </MenuItem>
          <div className=" my-8">
            <Divider />
          </div>

          <SubMenu label="CLASS" icon={<ClassIcon />}>
            <MenuItem>See all ClASS</MenuItem>
          </SubMenu>
          <SubMenu label="PROJECTS" icon={<FolderIcon />}>
            <MenuItem>See all Projects</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
