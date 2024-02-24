import { Link } from "react-router-dom";
import {
  PAGE_ITEM_CLASS,
  PAGE_ITEM_PROJECT,
} from "../../../../../types/GenericType";

type ToggleTileProps = {
  title: string;
  ItemId: string;
  ItemName: string;
  isSelected: boolean;
  avatarColor: string;
};

const ToggleTile = ({
  title,
  ItemName,
  ItemId,
  isSelected,
  avatarColor,
}: ToggleTileProps) => {
  return (
    <Link to={`/${title.toLocaleLowerCase()}/${ItemId}`}>
      <div
        className={`my-2 rounded-sm flex gap-2 ${
          isSelected && "bg-primary-light"
        }`}
      >
        <div
          className={` h-10 w-2 rounded-l-md  ${
            isSelected && "bg-primary-dark"
          }`}
        ></div>
        <div className="py-2 rounded-md flex gap-4">
          {title === PAGE_ITEM_PROJECT ? (
            <div
              style={{ backgroundColor: avatarColor }}
              className={`h-6 w-6 flex items-center justify-center rounded-md overflow-hidden`}
            >
              <p className="font-bold text-white">{ItemName.charAt(0)}</p>
            </div>
          ) : null}

          {title === PAGE_ITEM_CLASS ? (
            <div className="bg-main flex px-2 items-center justify-center rounded-md shadow-sm overflow-hidden">
              <p className="font-bold text-dark">{"CSS112"}</p>
            </div>
          ) : null}

          <p
            className={
              isSelected ? "text-white font-bold" : "text-primary-dark"
            }
          >
            {ItemName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ToggleTile;
