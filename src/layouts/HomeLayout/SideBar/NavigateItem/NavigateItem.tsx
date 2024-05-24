import { Link, useLocation } from "react-router-dom";
import { PAGE } from "../../../../types/GenericType";
import { Tooltip } from "@mui/material";

type NavigateItemProps = {
  index: number;
  menu: PAGE;
  open: boolean;
};

const NavigateItem = ({ index, menu, open }: NavigateItemProps) => {
  const { pathname } = useLocation();

  return (
    <Tooltip title={open == true ? "" : menu.title}>
      <Link to={menu.navigate} replace>
        <li
          key={index}
          className={`flex rounded-md p-2 py-3 cursor-pointer hover:bg-light-white 
          text-dark text-md items-center gap-x-2 ${
            menu.navigate === pathname
              ? "bg-primary-light text-white"
              : "bg-transparent"
          }
        ${index === 0 && "bg-light-white"} `}
          style={{
            marginTop: index === 0 ? "2px" : "9px",
            maxHeight: "48px",
            overflowY: "hidden",
          }}
        >
          {menu.Icon}
          <span
            className={`${
              !open && "hidden"
            } origin-left duration-200 font-roboto text-md`}
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {menu.title}
          </span>
        </li>
      </Link>
    </Tooltip>
  );
};

export default NavigateItem;
