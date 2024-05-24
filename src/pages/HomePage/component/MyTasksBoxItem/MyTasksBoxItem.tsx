import { Divider, Tooltip } from "@mui/material";
import moment from "moment";
import AvatarProject from "../../../../components/AvatarProject/AvatarProject";
import { Size } from "../../../../types/ProjectType";
import { MyTasks, Project } from "../../../../types/MyTasksType";
type MyTasksBoxItemProps = {
  project?: Project;
  item: MyTasks;
};
const MyTasksBoxItem = ({ project, item }: MyTasksBoxItemProps) => {
  return (
    <div>
      <div className="grid grid-cols-4 align-middle items-center gap-4 p-2 cursor-pointer bg-white shadow-3xl rounded-md">
        <div className="flex gap-4 col-span-1">
          <Tooltip title={project ? project.projectProfile.projectName : ""}>
            <AvatarProject
              isLoading={false}
              size={Size.small}
              projectName={
                project
                  ? project.projectProfile.projectName
                  : "Project not found"
              }
              color={project ? project.projectProfile.avatarColor : "grey"}
            />
          </Tooltip>
          <Divider orientation="vertical" variant="middle" flexItem />
        </div>

        <p className="my-1 col-span-1">{item.tasksName}</p>

        {item.startDate ? (
          moment(item.startDate).isSame(moment(), "day") ? (
            <div className="my-1 text-center col-span-1 text-red-500 font-semibold">
              <p>Today</p>
            </div>
          ) : (
            <div className="my-1 text-center col-span-1">
              {moment(item.startDate).format("ll")}
            </div>
          )
        ) : (
          <div className="my-1 text-center col-span-1"></div>
        )}

        {item.dueDate ? (
          moment(item.dueDate).isSame(moment(), "day") ? (
            <div className="my-1 text-center col-span-1 text-red-500 font-semibold">
              <p>Today</p>
            </div>
          ) : (
            <div className="my-1 text-center col-span-1">
              {moment(item.dueDate).format("ll")}
            </div>
          )
        ) : (
          <div className="my-1 text-center col-span-1"></div>
        )}
      </div>
    </div>
  );
};

export default MyTasksBoxItem;
