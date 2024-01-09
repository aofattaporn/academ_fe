export type ResponseCustom<T> = {
  status: number;
  message: string;
  description: string;
  data: T;
};
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TaskIcon from "@mui/icons-material/Task";
import NotificationsIcon from "@mui/icons-material/Notifications";

export type ErrorCustom = {
  message: string;
  description: string;
};

export type HttpStatus = 200 | 201 | 400 | 401 | 500;

export type HttpResponse =
  | "OK"
  | "Created"
  | "Bad Request"
  | "Unauthorized"
  | "Forbidden"
  | "Not Found"
  | "Internal Server Error";

export const HTTP_STATUS_OK: HttpStatus = 200;
export const HTTP_STATUS_CREATED: HttpStatus = 201;
export const HTTP_STATUS_BAD_REQUEST: HttpStatus = 400;
export const HTTP_STATUS_UNAUTHORIZED: HttpStatus = 401;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR: HttpStatus = 500;

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

type pageType = {
  title: string;
  Icon: ReactNode;
  navigate: string;
};

export const pageItem: pageType[] = [
  {
    title: "Home",
    Icon: <HomeIcon />,
    navigate: "/",
  },
  {
    title: "My Task",
    Icon: <TaskIcon />,
    navigate: "/mytask",
  },
  {
    title: "Notification",
    Icon: <NotificationsIcon />,
    navigate: "/notification",
  },
];
