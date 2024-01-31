import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

type ClassToggleProps = {
  icons: ReactNode;
  item: string;
  isOpen: boolean;
};

const ClassToggle = ({ icons, item, isOpen }: ClassToggleProps) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  return (
    <>
      <li
        onClick={() => setIsCollapse(!isCollapse)}
        className={`flex rounded-md p-2 py-3 cursor-pointer hover:bg-light-white 
        text-dark text-md items-center gap-x-2
        ${false ? "mt-9" : "mt-2"}   h-12 overflow-scroll  `}
      >
        {icons}
        <div
          className={`${
            !isOpen && "hidden"
          } origin-left duration-200 font-roboto text-md w-full flex justify-between`}
        >
          {item}
          {isOpen && (
            <ExpandLessIcon
              className={`${isCollapse ? "rotate-180" : "rotate-90"} `}
            />
          )}
        </div>
      </li>

      <div
        className={`overflow-scroll relative duration-100 mb-2 ${
          !isCollapse || !isOpen ? "h-0" : " h-auto"
        }`}
      >
        <Link to={"/projects"}>
          <div
            className="overflow-x-scroll  px-4 py-2 bg-slate-300 rounded-md 
          bg-gradient-to-r from-[#9379E0] via-[#AE78D6] to-[#D780E1] overflow-y-hidden h-10  mb-2"
          >
            <p className="overflow-scroll  text-white">see all Projects</p>
          </div>
        </Link>
        <div className="flex-col"></div>
      </div>
    </>
  );
};

export default ClassToggle;
