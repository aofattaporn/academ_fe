import { ReactNode } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

type ToggleTitleProps = {
  handleCloseCollapse: () => void;
  icons: ReactNode;
  isOpen: boolean;
  title: string;
  isCollapse: boolean;
};

const ToggleTitle = ({
  handleCloseCollapse,
  icons,
  isOpen,
  title,
  isCollapse,
}: ToggleTitleProps) => {
  return (
    <li
      onClick={handleCloseCollapse}
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
        {title}
        {isOpen && (
          <ExpandLessIcon
            className={`${isCollapse ? "rotate-180" : "rotate-90"} `}
          />
        )}
      </div>
    </li>
  );
};

export default ToggleTitle;
