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
      {task.startDate ? (
        moment(task.startDate).isSame(moment(), "day") ? (
          <div className="text-center text-red-500 font-bold">
            <p>Today</p>
          </div>
        ) : (
          <div className="text-center">
            {moment(task.startDate).format("ll")}
          </div>
        )
      ) : (
        <div className="text-center"></div>
      )}

      {task.dueDate ? (
        moment(task.dueDate).isSame(moment(), "day") ? (
          <div className="text-center text-red-500">
            <p>Today</p>
          </div>
        ) : (
          <div className="text-center">{moment(task.dueDate).format("ll")}</div>
        )
      ) : (
        <div className="text-center"></div>
      )}
    </div>
  );
};

export default TasksTile;
