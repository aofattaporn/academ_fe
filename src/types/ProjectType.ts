import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

type Views = {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export const views: Views[] = [
  {
    name: "List",
    icon: ListIcon,
  },
  {
    name: "Board",
    icon: DashboardIcon,
  },
  {
    name: "Calendar",
    icon: CalendarTodayIcon,
  },
  {
    name: "TimeLine",
    icon: ViewTimelineIcon,
  },
  {
    name: "Note",
    icon: NoteAddIcon,
  },
];
