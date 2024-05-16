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
      <div className="text-center overflow-x-clip">
        <div>{task.tasksName}</div>
      </div>

      <div className="text-center flex justify-center gap-4">
        {task.assignee ? (
          <>
            <Avatar
              sx={{
                width: 24,
                height: 24,
                backgroundColor: task.assignee.avatarColor,
              }}
            >
              <p className="text-sm"> {task.assignee.userName.at(0)}</p>
            </Avatar>
            {task.assignee.userName}
          </>
        ) : (
          ""
        )}
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
