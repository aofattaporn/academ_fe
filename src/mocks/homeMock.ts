import { HttpResponse, http } from "msw";
import { ClassType, MytaskType, ProjectType } from "../types/HomeType";
import { ResponseCustom } from "../types/GenericType";

const projectSucces = http.get("/api/v1/project/:userid", () => {
  const mockRes: ResponseCustom<ProjectType[]> = {
    status: 200,
    message: "Success",
    description: "Get Project Homepage Success",
    data: [
      {
        projectName: "Jit:D",
        projectId: "12345678",
      },
      {
        projectName: "Academ",
        projectId: "12345678",
      },
      {
        projectName: "TunTee",
        projectId: "12345678",
      },
    ],
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const projectBussinessError = http.get("/api/v1/project/:userid", () => {
  const mockRes: ResponseCustom<ProjectType[]> = {
    status: 400,
    message: "response business error",
    description: "cant to get project by project_id",
  };
  return HttpResponse.json(mockRes, { status: 400 });
});

const classSucces = http.get("/api/v1/class/:userid", () => {
  const mockRes: ResponseCustom<ClassType[]> = {
    status: 200,
    message: "Success",
    description: "Get Class Homepage Success",
    data:[
      {
        className: "Software Engineer",
        classId: "CSS 333",
      },
      {
        className: "Start Up",
        classId: "CSS 495",
      },
      {
        className: "Cooking",
        classId: "GEN 201",
      }
    ]
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const classBussinessError = http.get("/api/v1/class/:userid", () => {
  const mockRes: ResponseCustom<ClassType[]> = {
    status: 400,
    message: "response business error",
    description: "cant to get class by class_id",
  };
  return HttpResponse.json(mockRes, { status: 400 });
});


const mytaskSucces = http.get("/api/v1/tasks/:userid", () => {
  const mockRes: ResponseCustom<MytaskType[]> = {
    status: 200,
    message: "Success",
    description: "Get Tasks Homepage Success",
    data:[
      {
        taskName: "Homepage Academ",
        taskId: "1112",
        taskDuedate: "14 Dec",
        taskFromproject: "Academ",
      },
      {
        taskName: "Classpage Academ",
        taskId: "11547",
        taskDuedate: "16 Dec",
        taskFromproject: "Academ",
      },
      {
        taskName: "Taskspage Academ",
        taskId: "12354",
        taskDuedate: "15 Dec",
        taskFromproject: "Academ",
      }
    ]
  
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const myTasksBussinessError = http.get("/api/v1/tasks/:userid", () => {
  const mockRes: ResponseCustom<MytaskType[]> = {
    status: 400,
    message: "response business error",
    description: "cant to get myTasks by myTasks_id",
  };
  return HttpResponse.json(mockRes, { status: 400 });
});

export const homeMock = {
  projectSucces,
  classSucces,
  mytaskSucces,
  projectBussinessError,
  classBussinessError,
  myTasksBussinessError,
};

export default homeMock;
