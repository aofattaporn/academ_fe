import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StepAddName from "../pages/ProjectPage/StepProjecBody/StepAddName/StepAddName";
import StepSettingViews from "../pages/ProjectPage/StepProjecBody/StepSettingViews/StepSettingViews";
import StepOverview from "../pages/ProjectPage/StepProjecBody/StepOverview/StepOverview";
import StepShareInvite from "../pages/ProjectPage/StepProjecBody/StepShareInvite/StepShareInvite";

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
    component: <StepShareInvite />,
  },
  {
    title: "Project Summary",
    component: <StepOverview />,
  },
];

export type InviteProjectType = {
  email: string;
  role: string;
};

export interface ProjectType {
  projectName: string;
  projectStartDate: Date;
  projectEndDate: Date;
  views: string[];
  members: string[];
  invitationRequest: InviteProjectType[];
}

export interface ProjectRequestType {
  projectName: string;
  projectStartDate: Date;
  projectEndDate: Date;
  views: string[];
  invitationRequest: InviteProjectType[];
}
