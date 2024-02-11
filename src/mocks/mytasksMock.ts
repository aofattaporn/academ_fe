import { HttpResponse, http } from "msw";
import { ResponseCustom } from "../types/GenericType";
import { MytaskType } from "../types/MyTasksType";

const myTasksSuccess = http.get("/api/v1/tasks/users", () => {
  const mockRes: ResponseCustom<MytaskType[]> = {
    status: 200,
    message: "Success",
    description: "Get Project Homepage Success",
    data: [
      {
        projectName: "Jit:D",
        projectId: "1234",
        toDoProcess: [
            {
                toDoName: "Task 1",
                toDoDueDate: "2024-02-15"
            },
            {
                toDoName: "Task 2",
                toDoDueDate: "2024-02-20"
            }
        ],
        inProgessProcess: [
            {
            inProgressName: "Task 1",
            inProgressDate: "2024-02-15"
        },
        {
            inProgressName: "Task 2",
            inProgressDate: "2024-02-20"
        }],
        doneProcess: [
            {
            doneName: "Task 1",
            doneDate: "2024-02-15"
        },
        {
            doneName: "Task 2",
            doneDate: "2024-02-20"
        }]
      },
    ],
  };
  return HttpResponse.json(mockRes, { status: 200 });
});


export const myTasksMock = {
    myTasksSuccess,
};

export default myTasksMock;
