import { HttpResponse, delay, http } from "msw";
import { RESPONSE_OK, ResponseCustom } from "../types/GenericType";
import { ProjectList } from "../types/ProjectType";

const createProjectSuccess = http.post("/api/v1/projects", async () => {
  const mockRes: ResponseCustom<null> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

const getAllProjectError = http.get("/api/v1/projects", () =>
  HttpResponse.error()
);

const getAllProjectSuccess = http.get("/api/v1/projects", async () => {
  const mockRes: ResponseCustom<ProjectList[]> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: [
      {
        projectId: "AB123213",
        projectName: "JitD",
      },
      {
        projectId: "AB23214",
        projectName: "TungTee",
      },
    ],
  };

  await delay(3000);

  return HttpResponse.json(mockRes, { status: 200 });
});

export const projectMock = {
  createProjectSuccess,
  getAllProjectSuccess,
  getAllProjectError,
};
