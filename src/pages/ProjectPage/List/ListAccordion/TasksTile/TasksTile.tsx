import { Tasks } from "../../../../../types/MyTasksType";

type TasksTileProps = {
  task: Tasks;
};

const TasksTile = ({ task }: TasksTileProps) => {
  return (
    <div className="flex gap-4 items-center my-4">
      <div className="bg-slate-50 w-4 h-4 p-4 rounded-md"></div>
      <div className="w-full grid grid-cols-4">
        <p className="text-center">{task.tasksName}</p>
        <p className="text-center">{task.assignee}</p>
        <p className="text-center">{task.startDate.format("ll")}</p>
        <p className="text-center">{task.dueDate.format("ll")}</p>
      </div>
    </div>
  );
};

export default TasksTile;
