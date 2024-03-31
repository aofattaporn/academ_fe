import { useState } from "react";
import {
  NAVIGATOR,
  PAGE_ITEM,
  PAGE_ITEM_CLASS,
  PAGE_ITEM_PROJECT,
} from "../../../types/GenericType";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import FolderIcon from "@mui/icons-material/Folder";
import NavigateItem from "./NavigateItem/NavigateItem";
import AcademTitle from "./AcademTitle/AcademTitle";
import ToggleItem from "./ToggleItem/ToggleItem";
import useAllMyProjects from "../../../hooks/projectHook/useAllMyProjects";
import useAllClass from "../../../hooks/classHook/useAllClass";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    projectIsLoading,
    projectIsSuccess,
    projectIsError,
    projectData,
    projectRefetch,
  } = useAllMyProjects();

  // TODO : Get All Class
  const {
    classIsLoading,
    classIsSuccess,
    classIsError,
    classData,
    classRefetch,
  } = useAllClass();

  return (
    <div
      className={` ${
        isOpen ? "w-56" : "w-[84px]"
      } bg-dark-purple p-4  pt-8 relative duration-300 shadow-lg bg-white`}
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
        {PAGE_ITEM.map((menu, index) => (
          <NavigateItem key={index} index={index} menu={menu} open={isOpen} />
        ))}

        <Divider sx={{ marginTop: "2rem" }} />
        <ToggleItem
          icons={<FolderIcon style={{ width: "36px" }} />}
          title={PAGE_ITEM_PROJECT}
          navigate={NAVIGATOR.PROJECT}
          isOpen={isOpen}
          isLoading={projectIsLoading}
          isSuccess={projectIsSuccess}
          isError={projectIsError}
          refetch={() => projectRefetch()}
          data={projectData}
        />
        <Divider />
        <ToggleItem
          icons={<SchoolIcon style={{ width: "36px" }} />}
          title={PAGE_ITEM_CLASS}
          navigate={NAVIGATOR.CLASS}
          isOpen={isOpen}
          isLoading={classIsLoading}
          isSuccess={classIsSuccess}
          isError={classIsError}
          refetch={() => classRefetch()}
          data={classData}
        />
        <Divider />
      </ul>
    </div>
  );
};

export default SideBar;
