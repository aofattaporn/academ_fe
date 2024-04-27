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
  id: string;
  projectProfile: ProjectProfile;
  userId: string;
  title: string;
  body: string;
  date: string;
  isClear: boolean;
}
