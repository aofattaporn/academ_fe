import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pageItem } from "../../../types/GenericType";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AcademIcon from "../../../assets/svg/academ_icon.svg";
import { Divider } from "@mui/material";
import ClassToggle from "./ToggleItem/ClassToggle";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import NavigateItem from "./NavigateItem.tsx/NavigateItem";

const SideBar1 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={` ${
        isOpen ? "w-56" : "w-[84px]"
      } bg-dark-purple h-screen p-4  pt-8 relative duration-300 shadow-lg bg-white`}
    >
      <div
        className={`absolute cursor-pointer -right-3 top-3 w-8 h-8 border-dark-purple 
        rounded-md bg-primary flex justify-center items-center text-white 
        font-bold ${isOpen ? "-rotate-90" : "rotate-90"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ExpandLessIcon />
      </div>
      <div className="flex gap-x-4 items-center bg-primary-dark rounded-md mt-8">
        <div className="flex items-center gap-4 px-2 h-12 bg-primary-dark rounded-md text-white">
          <img src={AcademIcon} alt="Academ-icons" />
          {isOpen ? <h1 className=" font-bold">Academ</h1> : null}
        </div>
      </div>
      <ul className="pt-6">
        {pageItem.map((menu, index) => (
          <NavigateItem index={index} menu={menu} open={isOpen} />
        ))}

        <Divider sx={{ marginTop: "2rem" }} />
        <ClassToggle
          icons={<SchoolIcon style={{ width: "36px" }} />}
          item={"CLASS"}
          isOpen={isOpen}
        />
        <Divider />
        <ClassToggle
          icons={<FolderIcon style={{ width: "36px" }} />}
          item={"PROJECTS"}
          isOpen={isOpen}
        />
        <Divider />
      </ul>
    </div>
  );
};

export default SideBar1;
