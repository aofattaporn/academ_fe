import { HttpResponse, http } from "msw";
import { ProjectType } from "../types/HomeType";

const project_succes = http.get("/api/v1/project/:userid", () => {
    const mockRes: ProjectType = {
      projectName: "Jit:D",
      projectId: "12345678",
    };
    return HttpResponse.json(mockRes, { status: 200 });
  });

  export const homeMock = {
    project_succes,
  };
  
  export default homeMock;