import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Views } from "../../../../types/ProjectType";
import { Tooltip } from "@mui/material";

type AllViewToggleProps = {
  disable: boolean;
  viewsSelected: Views[];
  handleSelected: (selected: Views) => void;
};

const AllViewToggle = ({
  disable,
  viewsSelected,
  handleSelected,
}: AllViewToggleProps) => {
  return (
    <div className="flex justify-between gap-4 border-transparent px-0.5">
      <Tooltip title={Views.LIST} arrow>
        <button
          disabled={disable}
          onClick={() => handleSelected(Views.LIST)}
          className={`${
            viewsSelected.some((item) => item === Views.LIST)
              ? `${disable ? "bg-primary-light" : "bg-primary"} text-white `
              : "bg-white text-gray-500"
          }
      w-12 h-12 rounded-md border border-solid flex justify-center items-center`}
        >
          <ListIcon />
        </button>
      </Tooltip>

      <Tooltip title={Views.BOARD} arrow>
        <button
          disabled={disable}
          onClick={() => handleSelected(Views.BOARD)}
          className={`${
            viewsSelected.some((item) => item === Views.BOARD)
              ? `${disable ? "bg-primary-light" : "bg-primary"} text-white `
              : "bg-white text-gray-500"
          }
      w-12 h-12 rounded-md border border-solid flex justify-center items-center`}
        >
          <DashboardIcon />
        </button>
      </Tooltip>

      <Tooltip title={Views.TIMELINE} arrow>
        <button
          disabled={disable}
          onClick={() => handleSelected(Views.TIMELINE)}
          className={`${
            viewsSelected.some((item) => item === Views.TIMELINE)
              ? `${disable ? "bg-primary-light" : "bg-primary"} text-white `
              : "bg-white text-gray-500"
          }      
        w-12 h-12 rounded-md border border-solid flex justify-center items-center`}
        >
          <ViewTimelineIcon />
        </button>
      </Tooltip>

      <Tooltip title={Views.CALENDAR} arrow>
        <button
          disabled={disable}
          onClick={() => handleSelected(Views.CALENDAR)}
          className={`${
            viewsSelected.some((item) => item === Views.CALENDAR)
              ? `${disable ? "bg-primary-light" : "bg-primary"} text-white `
              : "bg-white text-gray-500"
          }
      w-12 h-12 rounded-md border border-solid flex justify-center items-center`}
        >
          <CalendarTodayIcon />
        </button>
      </Tooltip>

      <Tooltip title={Views.NOTE} arrow>
        <button
          disabled={disable}
          onClick={() => handleSelected(Views.NOTE)}
          className={`${
            viewsSelected.some((item) => item === Views.NOTE)
              ? `${disable ? "bg-primary-light" : "bg-primary"} text-white `
              : "bg-white text-gray-500"
          }
      w-12 h-12 rounded-md border border-solid flex justify-center items-center`}
        >
          <EditNoteIcon />
        </button>
      </Tooltip>
    </div>
  );
};

export default AllViewToggle;
