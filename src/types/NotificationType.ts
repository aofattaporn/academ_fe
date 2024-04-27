import { ProjectProfile } from "./ProjectType";

export interface NotificationAlert2 {
  ["ProjectName"]: string;
  ["AvatarColor"]: string;
  ["Title"]: string;
  ["Body"]: string;
  ["Date"]: string;
}

export interface NotificationAlert {
  ProjectName: string;
  AvatarColor: string;
  Title: string;
  Body: string;
  Date: string;
}

export interface Notification {
  projectProfile: ProjectProfile;
  userId: string;
  title: string;
  Body: string;
  date: string;
  isClear: boolean;
}
