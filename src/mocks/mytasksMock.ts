import { HttpResponse, http } from "msw";
import { ResponseCustom } from "../types/GenericType";
import { MytaskType } from "../types/MyTasksType";

const myTasksSuccess = http.get("/api/v1/projects/tasks/users", () => {
  const mockRes: ResponseCustom<MytaskType> = {
    status: 200,
    message: "Success",
    description: "Get Project My Tasks Success",
    data: {
      projects: [
        {
          projectProfile: {
            avatarColor: "#6985FF",
            projectName: "Jit:D",
          },
          className: "classA",
          projectId: "2",
          projectStartDate: "12/4/2024",
          projectEndDate: "12/7/2024",
          createdAt: "12/7/2024",
          updatedAt: "12/8/2024",
          process: [
            {
              processId: "1",
              processName: "To Do",
              processColor: "#C2C2C2",
            },
            {
              processId: "2",
              processName: "Inprogress",
              processColor: "#F9E116",
            },
            {
              processId: "3",
              processName: "Done",
              processColor: "#72C554",
            },
          ],
        },
        {
          projectProfile: {
            avatarColor: "#FFA8A7",
            projectName: "Tung Tee",
          },
          className: "classB",
          projectId: "1",
          projectStartDate: "12/4/2024",
          projectEndDate: "12/7/2024",
          createdAt: "12/7/2024",
          updatedAt: "12/8/2024",
          process: [
            {
              processId: "1",
              processName: "To Do",
              processColor: "#C2C2C2",
            },
            {
              processId: "2",
              processName: "Inprogress",
              processColor: "#F9E116",
            },
            {
              processId: "3",
              processName: "Done",
              processColor: "#72C554",
            },
          ],
        },
      ],
      tasks: [
        {
          tasksId: "2",
          processId: "1",
          tasksName: "Do something please. 1",
          assignee: {
            userName: "John Doe",
            email: "john@example.com",
            roleId: "1",
            userId: "1",
            avatarColor: "#FFFFFF",
          },
          dueDate: "14/7/2024",
          startDate: "12/7/2024",
          projectId: "1",
        },
        {
          tasksId: "3",
          projectId: "2",
          processId: "2",
          tasksName: "Do something please. 2",
          assignee: {
            userName: "John Doe",
            email: "john@example.com",
            roleId: "1",
            userId: "1",
            avatarColor: "#FFFFFF",
          },
          dueDate: "14/7/2024",
          startDate: "12/7/2024",
        },
        {
          tasksId: "4",
          projectId: "2",
          processId: "1",
          tasksName: "Do something please. 3",
          assignee: {
            userName: "John Doe",
            email: "john@example.com",
            roleId: "1",
            userId: "1",
            avatarColor: "#FFFFFF",
          },
          dueDate: "14/7/2024",
          startDate: "12/7/2024",
        },
        {
          tasksId: "5",
          projectId: "2",
          processId: "1",
          tasksName: "Do something please. 4",
          assignee: {
            userName: "John Doe",
            email: "john@example.com",
            roleId: "1",
            userId: "1",
            avatarColor: "#FFFFFF",
          },
          dueDate: "14/7/2024",
          startDate: "12/7/2024",
        },
        {
          tasksId: "4",
          projectId: "3",
          processId: "1234",
          tasksName: "Do something please. 5",
          assignee: {
            userName: "John Doe",
            email: "john@example.com",
            roleId: "1",
            userId: "1",
            avatarColor: "#FFFFFF",
          },
          dueDate: "15/7/2024",
          startDate: "12/7/2024",
        },
      ],
    },
  };
  return HttpResponse.json(mockRes, { status: 200 });
});

export const myTasksMock = {
  myTasksSuccess,
};

export default myTasksMock;
