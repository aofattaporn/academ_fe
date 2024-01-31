import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pageItem } from "../../../types/GenericType";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AcademIcon from "../../../assets/svg/academ_icon.svg";
import { Divider } from "@mui/material";
import ClassToggle from "./ToggleItem/ClassToggle";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";

const SideBar1 = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` ${
        open ? "w-56" : "w-[84px]"
      } bg-dark-purple h-screen p-4  pt-8 relative duration-300 shadow-lg bg-white`}
    >
      <div
        className={`absolute cursor-pointer -right-3 top-3 w-8 h-8 border-dark-purple 
        rounded-md bg-primary flex justify-center items-center text-white 
        font-bold ${open ? "-rotate-90" : "rotate-90"}`}
        onClick={() => setOpen(!open)}
      >
        <ExpandLessIcon />
      </div>
      <div className="flex gap-x-4 items-center bg-primary-dark rounded-md mt-8">
        <div className="flex items-center gap-4 px-2 h-12 bg-primary-dark rounded-md text-white">
          <img src={AcademIcon} alt="Your SVG" />
          {open ? <h1 className=" font-bold">Academ</h1> : null}
        </div>
      </div>
      <ul className="pt-6">
        {pageItem.map((menu, index) => (
          <Link key={index} to={menu.navigate} replace>
            <li
              key={index}
              className={`flex rounded-md p-2 py-3 cursor-pointer hover:bg-light-white 
              text-dark text-md items-center gap-x-2 ${
                menu.navigate === pathname
                  ? "bg-primary-light text-white"
                  : "bg-transparent"
              }
        ${false ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              {menu.Icon}
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 font-roboto text-md`}
              >
                {menu.title}
              </span>
            </li>
          </Link>
        ))}

        <Divider sx={{ marginTop: "2rem" }} />
        <ClassToggle
          icons={<SchoolIcon style={{ width: "36px" }} />}
          item={"CLASS"}
          isOpen={open}
        />
        <Divider />
        <ClassToggle
          icons={<FolderIcon style={{ width: "36px" }} />}
          item={"PROJECTS"}
          isOpen={open}
        />
        <Divider />
      </ul>
    </div>
  );
};

export default SideBar1;
