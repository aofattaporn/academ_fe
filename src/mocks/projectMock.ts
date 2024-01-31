import { HttpResponse, http } from "msw";
import { RESPONSE_OK, ResponseCustom } from "../types/GenericType";

const createProjectSuccess = http.post("/api/v1/projects", () => {
  const mockRes: ResponseCustom<null> = {
    status: 200,
    message: RESPONSE_OK,
    description: "Success",
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

export const projectMock = {
  createProjectSuccess,
};
