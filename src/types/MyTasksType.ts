import { z } from "zod";

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
  startDate: string | Date | null;
  dueDate: string | Date | null;
}

export interface CreateTasks {
  tasksName: string;
  projectId: string;
  processId: string;
}

export const tasksDetailsSchema = z.object({
  tasksName: z.string(),
  startDate: z.date(),
  dueDate: z.string(),
  assignee: z.string(),
});

export type TasksDetailsSchema = z.infer<typeof tasksDetailsSchema>;

export const BTN_TASKS_SAVE = "Save";
export const BTN_TASKS_CANCEL = "Cancel";
