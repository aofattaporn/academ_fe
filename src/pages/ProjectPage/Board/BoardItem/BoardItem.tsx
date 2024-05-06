import moment from "moment";
import { Tasks } from "../../../../types/MyTasksType";
import { Avatar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SettingTasksTile from "../../../../components/ListAccordion/ListAccordionItem/SettingTasksTile/SettingTasksTile";
import { TaskPermission } from "../../../../types/Permission";

type BoardItem = {
  tasks: Tasks;
  taskPermission: TaskPermission;
};

const BoardItem = ({ tasks, taskPermission }: BoardItem) => {
  return (
    <div className="bg-main w-full mt-4 p-4 shadow-3xl rounded-md hover:bg-gray-100 hover:cursor-pointer group">
      <div className="flex justify-between items-center">
        <p>{tasks.tasksName}</p>
        {taskPermission.delete ? (
          <SettingTasksTile tasksId={tasks.tasksId} isVisible={false} />
        ) : null}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="text-center text-gray-300">
          <p>{tasks.startDate ? moment(tasks.dueDate).format("l") : ""}</p>
        </div>
        {tasks.assignee ? (
          <Tooltip title={tasks.assignee.userName}>
            <div>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: tasks.assignee.avatarColor,
                }}
              >
                <p className="text-sm"> {tasks.assignee.userName.at(0)}</p>
              </Avatar>
            </div>
          </Tooltip>
        ) : (
          <Tooltip title={"No assignee"}>
            <div className=" invisible">
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  color: "grey",
                  backgroundColor: "transparent",
                  border: "2px dotted grey", // pogadot border color
                }}
              ></Avatar>
            </div>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default BoardItem;
