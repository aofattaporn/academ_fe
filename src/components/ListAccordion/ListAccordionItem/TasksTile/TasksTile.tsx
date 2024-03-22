import { Tasks } from "../../../../types/MyTasksType";
import moment from "moment";

type TasksTileProps = {
  task: Tasks;
};

const TasksTile = ({ task }: TasksTileProps) => {
  // const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  return (
    <div className={`flex gap-4 items-center p-1 group-hover:bg-gray-100`}>
      <div className="w-4 h-4 p-4 rounded-md"></div>
      <div className="w-full grid grid-cols-4">
        <p className="text-center overflow-x-scroll">{task.tasksName}</p>
        <p className="text-center">{task.assignee}</p>
        <p className="text-center">
          {task.startDate ? moment(task.startDate).format("l") : ""}
        </p>
        <p className="text-center">
          {task.dueDate ? moment(task.dueDate).format("l") : ""}
        </p>
      </div>
    </div>
  );
};

export default TasksTile;
