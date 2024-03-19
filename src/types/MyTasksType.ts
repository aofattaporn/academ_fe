export const BTN_UPDATE_TASKS: string = "Save Tasks";

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
  startDate: string;
  dueDate: string;
}

export interface CreateTasks {
  tasksName: string;
  projectId: string;
  processId: string;
}

export const mockedTasks: Tasks[] = [
  {
    tasksId: "123456789",
    tasksName: "Complete Report",
    processId: "1",
    assignee: "John Doe",
    startDate: "2024-03-06T00:00:00.000Z",
    dueDate: "2024-03-06T00:00:00.000Z",
  },
  {
    tasksId: "987654321",
    tasksName: "Review Presentation",
    processId: "1",
    assignee: "Jane Smith",
    startDate: "2024-03-06T00:00:00.000Z",
    dueDate: "2024-03-06T00:00:00.000Z",
  },
  {
    tasksId: "987654321",
    tasksName: "Review Presentation",
    processId: "1",
    assignee: "Jane Smith",
    startDate: "2024-03-06T00:00:00.000Z",
    dueDate: "2024-03-06T00:00:00.000Z",
  },
  {
    tasksId: "987654325",
    tasksName: "Review Testcase",
    processId: "2",
    assignee: "Jane Smith",
    startDate: "2024-03-06T00:00:00.000Z",
    dueDate: "2024-03-06T00:00:00.000Z",
  },
  {
    tasksId: "987654324",
    tasksName: "Testing",
    processId: "2",
    assignee: "Jane Smith",
    startDate: "2024-03-06T00:00:00.000Z",
    dueDate: "2024-03-06T00:00:00.000Z",
  },
];
