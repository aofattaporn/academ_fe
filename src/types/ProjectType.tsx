import { Moment } from "moment";
import {
  MembersPermission,
  ProjectPermission,
  TaskPermission,
} from "./Permission";

// ------------- composition-type  -----------------------
// -------------------------------------------------------

export const COUNT_ITEMS_SKELETON: number = 3;
export const BTN_CREATE_PROJECT: string = "Create Project";
export const PLACHOLDER_INPUT_PROJECT: string = "Enter your project name";
export const PLACHOLDER_INPUT_CLASS: string = "Enter your class name";

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
  members: Member[];
  projectEndDate: Date;
}

// ------------- new create-project type ------------------
// --------------------------------------------------------

export interface CreateProject {
  projectName: string;
  className: string;
  projectStartDate: Date | string | null;
  projectEndDate: Date | string | null;
  views: string[];
}

// -------------------- project type ---------------------
// -------------------------------------------------------

export interface Project {
  projectInfo: ProjectInfo;
  taskPermission: TaskPermission;
  projectPermission: ProjectPermission;
}

export interface ProjectInfo {
  projectId: string;
  projectProfile: ProjectProfile;
  className: string;
  views: string[];
  process: Process[];
  members: FullMember[];
  isArchive: boolean;
  projectEndDate: string | Date | null;
}

// -------------------- project-details type ---------------------
// -------------------------------------------------------

export interface ProjectDetailsPermission {
  projectDetails: ProjectDetails;
  projectPermission: ProjectPermission;
}

export interface ProjectDetails {
  projectId: string;
  className: string;
  projectProfile: ProjectProfile;
  views: string[];
  projectStartDate: string | Date | null;
  projectEndDate: string | Date | null;
}

// --------------- project infomations type ---------------------
// -------------------------------------------------------

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
  avatarColor: string;
}

export interface FullMember {
  userId: string;
  userName: string;
  email: string;
  roleId: string;
  avatarColor: string;
}

export interface RoleProject {
  roleId: string;
  roleName: string;
}

// --------------- project members type ---------------------
// -------------------------------------------------------

export interface MemberSetting {
  invites: Invite[];
  members: FullMember[];
  roles: RoleProject[];
}

export interface AllMemberAndPermission {
  allMemberProject: MemberSetting;
  membersPermission: MembersPermission;
}

export interface Invite {
  inviteId: string;
  inviteRoleId: string;
  inviteEmail: string;
  inviteDate: string | Moment | null;
}
