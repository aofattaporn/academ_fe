import { Tasks } from "../../../../types/MyTasksType";
import { Process, TaskPermission } from "../../../../types/ProjectType";
import BoardItem from "../BoardItem/BoardItem";

type BoardTileProps = {
  process: Process;
  tasks: Tasks[] | undefined;
  taskPermission: TaskPermission;
};

const BoardTile = ({ tasks, process }: BoardTileProps) => {
  console.log(process.processColor);
  return (
    <div className="h-screen min-h-fit w-80 font-roboto text-dark">
      <div className="my-4 shadow-3xl rounded-md bg-main flex items-center gap-4">
        <div
          style={{ background: process.processColor }}
          className={`w-4 h-12`}
        ></div>
        <p>{process.processName}</p>
      </div>

      <div className="h-svh p-4 my-4 shadow-md rounded-md bg-main">
        {tasks
          ? tasks
              .filter((task) => task.processId === process.processId)
              .map((item, index) => <BoardItem key={index} tasks={item} />)
          : null}
      </div>
    </div>
  );
};

export default BoardTile;
4;
