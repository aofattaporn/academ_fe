export type MytaskType = {
    projectName: string;
    projectId: string;
    toDoProcess: toDoProcess[];
    inProgessProcess: inProgressProcess[];
    doneProcess: doneProcess[];
};

type toDoProcess = {
    toDoName: string;
    toDoDueDate: string;
};

type inProgressProcess = {
    inProgressName: string;
    inProgressDate: string;
};

type doneProcess = {
    doneName: string;
    doneDate: string;
};