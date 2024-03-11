import { useSelector } from "react-redux";
import { RootState } from "../../../../../stores/store";
import { Tasks } from "../../../../../types/MyTasksType";

type TasksTileProps = {
  task: Tasks;
};

const TasksTile = ({ task }: TasksTileProps) => {
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  return (
    <div
      className={`flex gap-4 items-center p-1 ${
        tasksDetails.tasksSeletedId === task.tasksId
          ? "bg-primary-subtle"
          : "bg-main"
      }`}
    >
      <div className="w-4 h-4 p-4 rounded-md"></div>
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
