export type ProjectType = {
    projectName: string;
    projectId: string;
  };

export type ClassType = {
  className: string;
  classId: string;
};

export type MytaskType  = {
  taskName: string;
  taskId: string;
  taskDuedate: string;
  taskFromproject: string;
};

export const GreetingType ={
  DASH_DMY:"D MMMM YYYY",
  Morning:"Good Morning",
  AfterNoon:"Good Afternoon",
  Evening:"Good Evening",
  Night:"Good Night",
  GreetingOther:"Have a good day"
}

