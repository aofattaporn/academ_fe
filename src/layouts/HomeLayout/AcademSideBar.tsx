import { IconButton, Divider, Button } from "@mui/material";
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

        <SubMenu
          className="flex-col justify-center align-middle items-center"
          label="CLASS"
          icon={<ClassIcon />}
        >
          <div className="py-4 px-4 hover:cursor-pointer bg-slate-600 mx-4 my-2 h-8 rounded-md flex items-center align-middle text-white test">
            See all ClASS
          </div>
        </SubMenu>
        <SubMenu label="PROJECTS" icon={<FolderIcon />}>
          <div className="py-4 px-4 hover:cursor-pointer bg-slate-600 mx-4 my-2 h-8 rounded-md flex items-center align-middle text-white test">
            See all Projects
          </div>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default AcademSideBar;
