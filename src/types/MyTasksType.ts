import { z } from "zod";
import { FullMember, Process, ProjectProfile } from "./ProjectType";

export const BTN_UPDATE_TASKS: string = "Save Tasks";

export type MytaskType = {
  projects: Project[];
  tasks: MyTasks[];
};

export type Project = {
  projectProfile: ProjectProfile;
  projectId: string;
  projectStartDate: string;
  projectEndDate: string;
  createdAt: string;
  className: string;
  updatedAt: string;
  process: Process[];
  isArchive: boolean;
};

export type MyTasks = {
  tasksId: string;
  tasksName: string;
  projectId: string;
  processId: string;
  assignee?: FullMember;
  startDate: string | Date | null;
  dueDate: string | Date | null;
};

export interface Tasks {
  tasksId: string;
  projectId: string;
  processId: string;
  tasksName: string;
  assignee?: FullMember;
  startDate: string | Date | null;
  dueDate: string | Date | null;
}

export interface CreateTasks {
  tasksName: string;
  projectId: string;
  processId: string;
  startDate?: string | Date | null;
  dueDate?: string | Date | null;
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
export const LABEL_TASKS_START_DATE = "Start Date";
export const LABEL_TASKS_DUE_DATE = "End Date";
