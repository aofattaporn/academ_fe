import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StepAddName from "../pages/ProjectPage/CreateProject/StepProjecBody/StepAddName";
import StepSettingViews from "../pages/ProjectPage/CreateProject/StepProjecBody/StepSettingViews";
import StepOverview from "../pages/ProjectPage/CreateProject/StepProjecBody/StepOverview";

type Views = {
  name: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

type CreateProjectType = {
  title: string;
  component: JSX.Element;
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

export const stepCreateProject: CreateProjectType[] = [
  {
    title: "Project Name",
    component: <StepAddName />,
  },
  {
    title: "Default Settings for Views",
    component: <StepSettingViews />,
  },
  {
    title: "Share with",
    component: <StepSettingViews />,
  },
  {
    title: "Project Summary",
    component: <StepOverview />,
  },
];
