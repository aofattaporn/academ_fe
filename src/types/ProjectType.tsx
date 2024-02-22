import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ListIcon from "@mui/icons-material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// ------------- create-project type ---------------------
// -------------------------------------------------------

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

export const viewItems: ViewItem[] = [
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

// ------------- create-project type ---------------------
// -------------------------------------------------------

export interface ListProject {
  projectId: string;
  projectName: string;
}

// ------------- new create-project type ---------------------
// -------------------------------------------------------

export interface CreateInvite {
  inviteRole: string;
  inviteEmail: string;
}

export interface ProjectProfile {
  projectName: string;
  avatarColor: string;
}

export interface CreateProject {
  projectProfile: ProjectProfile;
  projectStartDate: Date;
  projectEndDate: Date;
  views: string[];
  inviteRequests: CreateInvite[];
}

export enum Size {
  small,
  medium,
  large,
}

export const BTN_CREATE_PROJECT = "Create Project";
