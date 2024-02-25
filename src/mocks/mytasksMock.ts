import { HttpResponse, http } from "msw";
import { ResponseCustom } from "../types/GenericType";
import { MytaskType } from "../types/MyTasksType";

const myTasksSuccess = http.get("/api/v1/projects/tasks/users", () => {
  const mockRes: ResponseCustom<MytaskType> = {
    status: 200,
    message: "Success",
    description: "Get Project My Tasks Success",
    data: 
      {
        project : [
          {
            project_id:"1234",
            projectName:"Jit:D",
            projectStartDate:"12/4/2024",
            projectEndDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/8/2024",
            process:[
              {
                process_id:"1",
                processsName:"To Do"
              },
              {
                process_id:"2",
                processsName:"In Progress"
              },
              {
                process_id:"3",
                processsName:"Done"
              },
            ]
          },
          {
            project_id:"12",
            projectName:"Tung Tee",
            projectStartDate:"12/4/2024",
            projectEndDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/8/2024",
            process:[
              {
                process_id:"1",
                processsName:"To Do"
              },
              {
                process_id:"2",
                processsName:"In Progress"
              },
              {
                process_id:"3",
                processsName:"Review"
              },
              {
                process_id:"4",
                processsName:"Done"
              },
            ]
          }
        ],
        tasks: [
          {
            tasks_id:"2",
            project_id:"1234",
            taskName:"Do something please. 1",
            assignee_id:"userID",
            dueDate:"14/7/2024",
            startDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/7/2024",
            process_id:"1",
          },
          {
            tasks_id:"3",
            project_id:"1234",
            taskName:"Do something please. 2",
            assignee_id:"userID",
            dueDate:"14/7/2024",
            startDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/7/2024",
            process_id:"3",
          },
          {
            tasks_id:"4",
            project_id:"1234",
            taskName:"Do something please. 3",
            assignee_id:"userID",
            dueDate:"14/7/2024",
            startDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/7/2024",
            process_id:"2",
          },
          {
            tasks_id:"5",
            project_id:"12",
            taskName:"Do something please. 4",
            assignee_id:"userID",
            dueDate:"14/7/2024",
            startDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/7/2024",
            process_id:"2",
          },
          {
            tasks_id:"4",
            project_id:"1234",
            taskName:"Do something please. 5",
            assignee_id:"userID",
            dueDate:"15/7/2024",
            startDate:"12/7/2024",
            createdAt:"12/7/2024",
            updatedAt:"12/7/2024",
            process_id:"2",
          },
        ]
      },
    
  };
  return HttpResponse.json(mockRes, { status: 200 });
});


export const myTasksMock = {
    myTasksSuccess,
};

export default myTasksMock;
