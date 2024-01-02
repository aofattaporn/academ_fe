import { IconButton, Divider } from "@mui/material";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useLocation, useParams } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FolderIcon from "@mui/icons-material/Folder";
import ClassIcon from "@mui/icons-material/Class";
import MenuIcon from "@mui/icons-material/Menu";
import YourSvg from "../../assets/svg/academ_icon.svg";
import { pageItem } from "../../types/GenericType";

const AcademSideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  const [collapsed, setCollapsed] = useState(false);
  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sidebar backgroundColor="#ffffff" collapsed={collapsed} width="220px">
      <div className="my-8 flex justify-around align-middle items-center m-2 px-2 h-16 ">
        {!collapsed && (
          <div className="flex items-center gap-1 px-2 bg-primary-dark rounded-md h-3/4 text-white">
            <img src={YourSvg} alt="Your SVG" width={40} />
            <h1 className=" font-bold">Academ</h1>
          </div>
        )}
        <IconButton onClick={() => setCollapsed((prev) => !prev)}>
          {collapsed ? <MenuIcon /> : <ExpandLessIcon className="-rotate-90" />}
        </IconButton>
      </div>
      <Menu
        className="text-dark"
        menuItemStyles={{
          button: ({ disabled, level }) => {
            if (level === 0)
              return {
                color: disabled ? "#ffffff" : undefined,
                backgroundColor: disabled ? "#CFBBEA" : undefined,
                borderRadius: "2px",
              };
          },
        }}
      >
        {pageItem.map((page, index) => {
          return (
            <MenuItem
              key={`${index}-${page.title}`}
              className="m-1"
              icon={page.Icon}
              component={<Link to={page.navigate} replace></Link>}
              disabled={page.navigate === pathname}
            >
              {page.title}
            </MenuItem>
          );
        })}

        <div className="my-8">
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
  );
};

export default AcademSideBar;
