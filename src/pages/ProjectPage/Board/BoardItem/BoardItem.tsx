import moment from "moment";
import { Tasks } from "../../../../types/MyTasksType";
import { Avatar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SettingTasksTile from "../../../../components/ListAccordion/ListAccordionItem/SettingTasksTile/SettingTasksTile";

type BoardItem = {
  tasks: Tasks;
};

const BoardItem = ({ tasks }: BoardItem) => {
  return (
    <div className="bg-main w-full mt-4 p-4 shadow-3xl rounded-md hover:bg-gray-100 hover:cursor-pointer group">
      <div className="flex justify-between items-center">
        <p>{tasks.tasksName}</p>
        <SettingTasksTile tasksId={tasks.tasksId} isVisible={false} />
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className=" text-gray-300">{moment(tasks.dueDate).format("l")}</p>
        <Tooltip title={tasks.assignee}>
          <Avatar alt={tasks.assignee} sx={{ width: 24, height: 24 }}>
            {tasks.assignee.at(0)}
          </Avatar>
        </Tooltip>
      </div>
    </div>
  );
};

export default BoardItem;
