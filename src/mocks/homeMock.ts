import { HttpResponse, http } from "msw";
import { ClassType, MytaskType, ProjectType } from "../types/HomeType";
import { ResponseCustom } from "../types/GenericType";

const project_succes = http.get("/api/v1/project/:userid", () => {
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

const class_succes = http.get("/api/v1/class/:userid", () => {
  const mockRes: ResponseCustom<ClassType[]> = {
    status: 200,
    message: "Success",
    description: "Get Class Homepage Success",
    data:[
      {
        className: "Software Engineer",
        classId: "123",
      },
      {
        className: "Start Up",
        classId: "333",
      },
      {
        className: "Cooking",
        classId: "201",
      }
    ]
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const mytask_succes = http.get("/api/v1/tasks/:userid", () => {
  const mockRes: MytaskType = {
    taskName: "Homepage Academ",
    taskId: "1112",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

export const homeMock = {
  project_succes,
  class_succes,
  mytask_succes,
};

export default homeMock;
