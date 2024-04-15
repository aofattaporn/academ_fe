import { Avatar } from "@mui/material";
import { Tasks } from "../../../../types/MyTasksType";
import moment from "moment";

type TasksTileProps = {
  task: Tasks;
};

const TasksTile = ({ task }: TasksTileProps) => {
  return (
    <div
      className={`grid grid-cols-4 p-2 group-hover:bg-gray-100 w-full items-center`}
    >
      <div className="text-center overflow-x-scroll">
        <div>{task.tasksName}</div>
      </div>
      <div className="text-center flex justify-center gap-4">
        <Avatar alt={task.assignee} sx={{ width: 20, height: 20 }}>
          {task.assignee.at(0)}
        </Avatar>
        {task.assignee}
      </div>
      <div className="text-center">
        {task.startDate ? moment(task.startDate).format("l") : ""}
      </div>
      <div className="text-center">
        {task.dueDate ? moment(task.dueDate).format("l") : ""}
      </div>
    </div>
  );
};

export default TasksTile;
