export type MytaskType = {
    project:Project[];
    tasks:MyTasks[];
};

export type Project = {
    project_id:string;
    projectName:string;
    projectStartDate:string;
    projectEndDate:string;
    createdAt:string;
    updatedAt:string;
    process:Process[];
};

type Process = {
    process_id:string;
    processsName:string;
};

export type MyTasks = {
    tasks_id:string;
    project_id:string;
    taskName:string;
    assignee_id:string;
    dueDate:string;
    startDate:string;
    createdAt:string;
    updatedAt:string;
    process_id:string;
};