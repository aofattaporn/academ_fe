import { HttpResponse, http } from "msw";
import { ResponseCustom } from "../types/GenericType";
import { UserType } from "../types/UserType";

// sign-up mocking
const getUserSuccess = http.get("/api/v1/users", () => {
  const mockRes: ResponseCustom<UserType> = {
    status: 200,
    message: "Success",
    description: "SignUp Seccess",
    data: {
      email: "exampl123e@hotmail.com",
      fullName: "Example Mocking",
    },
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

export const userMock = {
  getUserSuccess,
};

export default userMock;
