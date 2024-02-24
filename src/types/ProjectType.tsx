// ------------- create-project type ---------------------
// -------------------------------------------------------

import { Moment } from "moment";

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

// ------------- create-project type ---------------------
// -------------------------------------------------------

export interface ListProject {
  projectId: string;
  projectProfile: ProjectProfile;
  membersCounts: number;
  projectEndDate: Date;
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
  projectName: string;
  projectEndDate: Moment | null;
  views: string[];
}

export enum Size {
  small,
  medium,
  large,
}

export const BTN_CREATE_PROJECT = "Create Project";
