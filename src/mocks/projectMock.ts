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

const getAllProjectError = http.get("/api/v1/projects/user", () =>
  HttpResponse.error()
);

const getAllProjectSuccess = http.get("api/v1/projects/user", async () => {
  const mockRes: ResponseCustom<ProjectList[]> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
    data: [
      {
        projectId: "6adc6173-8c9b-4357-a051-aa41a9978257",
        projectName: "JitD",
      },
      {
        projectId: "e7e603f0-b7cb-46c2-a856-10b36d1be070",
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
