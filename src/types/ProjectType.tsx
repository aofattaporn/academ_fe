import { Moment } from "moment";
import { TaskPermission } from "./Permission";

// ------------- composition-type  -----------------------
// -------------------------------------------------------

export const COUNT_ITEMS_SKELETON: number = 3;
export const BTN_CREATE_PROJECT: string = "Create Project";
export const PLACHOLDER_INPUT_PROJECT: string = "Enter your project name";

export const PROJECT_SETTING = {
  PROJECR_DETAILS: "Project Details",
  MANAGE_PROJECT_PERMISSIONS: "Manage project permissions",
  MEMBERS: "Members",
};

export enum Views {
  LIST = "List",
  BOARD = "Board",
  CALENDAR = "Calendar",
  TIMELINE = "TimeLine",
  NOTE = "Note",
}
export const ALL_VIEWS: Views[] = [
  Views.LIST,
  Views.BOARD,
  Views.CALENDAR,
  Views.TIMELINE,
  Views.NOTE,
];

export enum Size {
  small,
  medium,
  large,
}

// --------------- List-project type ---------------------
// -------------------------------------------------------

export interface ListProject {
  projectId: string;
  projectProfile: ProjectProfile;
  membersCounts: number;
  projectEndDate: Date;
}

// ------------- new create-project type ------------------
// --------------------------------------------------------

export interface CreateProject {
  projectName: string;
  projectEndDate: Moment | null;
  views: string[];
}

// -------------------- project type ---------------------
// -------------------------------------------------------

export interface Project {
  projectInfo: ProjectInfo;
  taskPermission: TaskPermission;
}

export interface ProjectInfo {
  projectId: string;
  projectProfile: ProjectProfile;
  views: string[];
  process: Process[];
  members: Member[];
}

export interface ProjectDetails {
  projectId: string;
  projectProfile: ProjectProfile;
  views: string[];
  startDate?: string | Moment | null;
  dueDate?: string | Moment | null;
}

export interface ProjectProfile {
  projectName: string;
  avatarColor: string;
}

export interface Process {
  processId: string;
  processName: string;
  processColor: string;
}

export interface Member {
  userName: string;
}

export interface FullMember {
  userId: string;
  userName: string;
  email: string;
  roleId: string;
}

export interface RoleProject {
  roleId: string;
  roleName: string;
}

export interface MemberSetting {
  members: FullMember[];
  roles: RoleProject[];
}
