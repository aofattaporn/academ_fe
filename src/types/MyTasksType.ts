import moment from "moment";
import { Moment } from "moment";

export type MytaskType = {
  project: Project[];
  tasks: MyTasks[];
};

export type Project = {
  project_id: string;
  projectName: string;
  projectStartDate: string;
  projectEndDate: string;
  createdAt: string;
  updatedAt: string;
  process: Process[];
};

type Process = {
  process_id: string;
  processsName: string;
};

export type MyTasks = {
  tasks_id: string;
  project_id: string;
  taskName: string;
  assignee_id: string;
  dueDate: string;
  startDate: string;
  createdAt: string;
  updatedAt: string;
  process_id: string;
};

export interface Tasks {
  tasksId: string;
  tasksName: string;
  processId: string;
  assignee: string;
  startDate: Moment;
  dueDate: Moment;
}

export const mockedTasks: Tasks[] = [
  {
    tasksId: "123456789",
    tasksName: "Complete Report",
    processId: "1",
    assignee: "John Doe",
    startDate: moment("2024-03-06"),
    dueDate: moment("2024-03-10"),
  },
  {
    tasksId: "987654321",
    tasksName: "Review Presentation",
    processId: "1",
    assignee: "Jane Smith",
    startDate: moment("2024-03-08"),
    dueDate: moment("2024-03-12"),
  },
  {
    tasksId: "987654321",
    tasksName: "Review Presentation",
    processId: "1",
    assignee: "Jane Smith",
    startDate: moment("2024-03-08"),
    dueDate: moment("2024-03-12"),
  },
  {
    tasksId: "987654325",
    tasksName: "Review Testcase",
    processId: "2",
    assignee: "Jane Smith",
    startDate: moment("2024-03-08"),
    dueDate: moment("2024-03-12"),
  },
  {
    tasksId: "987654324",
    tasksName: "Testing",
    processId: "2",
    assignee: "Jane Smith",
    startDate: moment("2024-03-08"),
    dueDate: moment("2024-03-12"),
  },
];
