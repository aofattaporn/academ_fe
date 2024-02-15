import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StepAddName from "../pages/AllMyProject/StepProjecBody/StepAddName/StepAddName";
import StepSettingViews from "../pages/AllMyProject/StepProjecBody/StepSettingViews/StepSettingViews";
import StepOverview from "../pages/AllMyProject/StepProjecBody/StepOverview/StepOverview";
import StepShareInvite from "../pages/AllMyProject/StepProjecBody/StepShareInvite/StepShareInvite";

export enum Views {
  LIST = "List",
  BOARD = "Board",
  CALENDAR = "Calendar",
  TIMELINE = "TimeLine",
  NOTE = "Note",
}

type ViewItem = {
  name: Views;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

type CreateProjectType = {
  title: string;
  component: JSX.Element;
};

export const views: ViewItem[] = [
  {
    name: Views.LIST,
    icon: ListIcon,
  },
  {
    name: Views.BOARD,
    icon: DashboardIcon,
  },
  {
    name: Views.CALENDAR,
    icon: CalendarTodayIcon,
  },
  {
    name: Views.TIMELINE,
    icon: ViewTimelineIcon,
  },
  {
    name: Views.NOTE,
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

export interface ListProject {
  projectId: string;
  projectName: string;
}

export interface ProjectRequestType {
  projectName: string;
  projectStartDate: Date;
  projectEndDate: Date;
  views: string[];
  invitationRequest: InviteProjectType[];
}

export enum Size {
  small,
  medium,
  large,
}
