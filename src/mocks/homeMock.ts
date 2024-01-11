import { HttpResponse, http } from "msw";
import { ClassType, MytaskType, ProjectType } from "../types/HomeType";

const project_succes = http.get("/api/v1/project/:userid", () => {
    const mockRes: ProjectType = {
      projectName: "Jit:D",
      projectId: "12345678",
    };
    return HttpResponse.json(mockRes, { status: 200 });
  });

const class_succes = http.get("/api/v1/class/:userid", () => {
    const mockRes: ClassType = {
      className: "Software Engineer",
      classId: "123",
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