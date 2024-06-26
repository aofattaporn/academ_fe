export type ResponseCustom<T> = {
  status: number;
  message: string;
  description: string;
  data?: T;
};
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import NotificationsIcon from "@mui/icons-material/Notifications";

export type ErrorCustom = {
  message: string;
  description: string;
};

export type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 408 | 500;

export type STATUS_CODE = 1000 | 1899 | 1999;

export type HttpResponse =
  | "OK"
  | "Created"
  | "Bad Request"
  | "Unauthorized"
  | "Forbidden"
  | "Not Found"
  | "Internal Server Error"
  | "BUSSINESS ERROR"
  | "TECHNICAL ERROR";

export const HTTP_STATUS_OK: HttpStatus = 200;
export const HTTP_STATUS_CREATED: HttpStatus = 201;
export const HTTP_STATUS_BAD_REQUEST: HttpStatus = 400;
export const HTTP_STATUS_NOT_FOUND: HttpStatus = 404;
export const HTTP_STATUS_UNAUTHORIZED: HttpStatus = 401;
export const HTTP_STATUS_FORBIDDEN: HttpStatus = 403;
export const HTTP_STATUS_REQUES_TIME_OUT: HttpStatus = 408;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR: HttpStatus = 500;

export const STATUS_CODE_1000: STATUS_CODE = 1000;
export const STATUS_CODE_1899: STATUS_CODE = 1899;
export const STATUS_CODE_1999: STATUS_CODE = 1999;

export const RESPONSE_BUSSINESS_ERROR: HttpResponse = "BUSSINESS ERROR";
export const RESPONSE_TECHNICAL_ERROR: HttpResponse = "TECHNICAL ERROR";

export const RESPONSE_OK: HttpResponse = "OK";
export const RESPONSE_CREATED: HttpResponse = "Created";
export const RESPONSE_BAD_REQUEST: HttpResponse = "Bad Request";
export const RESPONSE_UNAUTHORIZED: HttpResponse = "Unauthorized";
export const RESPONSE_FORBIDDEN: HttpResponse = "Forbidden";
export const RESPONSE_NOT_FOUND: HttpResponse = "Not Found";
export const RESPONSE_INTERNAL_SERVER_ERROR: HttpResponse =
  "Internal Server Error";
export const RESPONSE_AUTH_ERROR = "Firebase Auth Error";
export const RESPONSE_TRY_AGAIN_LATHER =
  "Some thing when wrong, Please Try Again";

export const EMAIL_DID_NOT_VERIFY = "Email didn't verify";

export type PAGE = {
  title: string;
  Icon: ReactNode;
  navigate: string;
};

export const PAGE_ITEM_PROJECT = "PROJECTS";
export const PAGE_ITEM_CLASS = "CLASS";
export const PAGE_ITEM: PAGE[] = [
  {
    title: "Home",
    Icon: <HomeIcon style={{ width: "36px" }} />,
    navigate: "/",
  },
  {
    title: "My Task",
    Icon: <TaskIcon style={{ width: "36px" }} />,
    navigate: "/mytask",
  },
  {
    title: "Notification",
    Icon: <NotificationsIcon style={{ width: "36px" }} />,
    navigate: "/notification",
  },
];

export const NAVIGATOR = {
  PROJECT: "/projects",
  CLASS: "/class",
};

export const QUERY_KEY = {
  HOME_PROJECTS: "honeProject",
  HOME_TASKS: "homeTasks",
  USER: "user",
  ACCEPT_INVITE: "acceptInvite",
  ALL_PROJECT: "allProjectData",
  PROJECTINFO_SETTING: "projectInfoSetting",
  PERMISSION_SETTING: "permissionfoSetting",
  MEMBERS_SETTING: "membersSetting",
  PROJECR: "project",
  MY_TASKS: "myTasks",
  ALL_TASKS: "allTasks",
  Tasks: "tasks",
  NOTIFICATIONS: "notifications",
};

export const SLICE_KEY = {
  USER: "user",
  MODAL: "MODAL",
  ALL_PROJECT: "allProjectData",
  TASKS_DETAILS: "tasksDetails",
  ALL_TASKS: "allTasks",
};
