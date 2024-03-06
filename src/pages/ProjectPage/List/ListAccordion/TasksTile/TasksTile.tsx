import { Tasks } from "../../../../../types/MyTasksType";

type TasksTileProps = {
  task: Tasks;
};

const TasksTile = ({ task }: TasksTileProps) => {
  return (
    <div className="flex gap-4 items-center my-2 bg-main border-solid border-b-2">
      <div className=" w-4 h-4 p-4 rounded-md"></div>
      <div className="w-full grid grid-cols-4">
        <p className="text-center">{task.tasksName}</p>
        <p className="text-center">{task.assignee}</p>
        <p className="text-center">{}</p>
        <p className="text-center">{}</p>
      </div>
    </div>
  );
};

export default TasksTile;
