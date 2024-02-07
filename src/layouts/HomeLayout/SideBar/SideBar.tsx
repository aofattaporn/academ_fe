import { useState } from "react";
import { pageItem } from "../../../types/GenericType";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import NavigateItem from "./NavigateItem/NavigateItem";
import AcademTitle from "./AcademTitle/AcademTitle";
import ToggleItem from "./ToggleItem/ToggleItem";

const SideBar1 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // TODO : Fetch Project and class toggle

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
      <AcademTitle isOpen={isOpen} />
      <ul className="pt-6">
        {pageItem.map((menu, index) => (
          <NavigateItem index={index} menu={menu} open={isOpen} />
        ))}

        <Divider sx={{ marginTop: "2rem" }} />
        <ToggleItem
          icons={<SchoolIcon style={{ width: "36px" }} />}
          item={"CLASS"}
          isOpen={isOpen}
        />
        <Divider />
        <ToggleItem
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
