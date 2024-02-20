export type MytaskType = {
    project:project[];
    tasks:myTasks[];
};

export type project = {
    project_id:string;
    projectName:string;
    projectStartDate:string;
    projectEndDate:string;
    createdAt:string;
    updatedAt:string;
    process:process[];
};

type process = {
    process_id:string;
    processsName:string;
};

export type myTasks = {
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