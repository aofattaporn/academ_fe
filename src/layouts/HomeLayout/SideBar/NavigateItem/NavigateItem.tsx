import { Link, useLocation } from "react-router-dom";
import { pageType } from "../../../../types/GenericType";

type NavigateItemProps = {
  index: number;
  menu: pageType;
  open: boolean;
};
const NavigateItem = ({ index, menu, open }: NavigateItemProps) => {
  const { pathname } = useLocation();
  return (
    <Link to={menu.navigate} replace>
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
  );
};

export default NavigateItem;
