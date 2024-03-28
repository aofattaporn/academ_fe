import { useSelector, useDispatch } from "react-redux";
import Draggable from "../../../../hoc/Draggable";
import Droppable from "../../../../hoc/Droppable";
import {
  openDetails,
  seletedId,
} from "../../../../stores/projectSlice/tastsDetailsSlice";
import { RootState } from "../../../../stores/store";
import { Tasks } from "../../../../types/MyTasksType";
import { Process, TaskPermission } from "../../../../types/ProjectType";
import BoardItem from "../BoardItem/BoardItem";
import { useRef } from "react";
import CreateBoardItem from "../CreateBoardItem/CreateBoardItem";

type BoardTileProps = {
  process: Process;
  tasks: Tasks[];
  activeId: string | null;
  taskPermission: TaskPermission;
  maxTasks: number;
};

const BoardTile = ({
  tasks,
  activeId,
  process,
  taskPermission,
  maxTasks,
}: BoardTileProps) => {
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  const dispatch = useDispatch();
  const mouseDownPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement>,
    task: Tasks
  ) => {
    mouseDownPosition.current = { x: event.clientX, y: event.clientY };
    dispatch(seletedId(task.tasksId));
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const mouseUpPosition = { x: event.clientX, y: event.clientY };
    if (
      mouseUpPosition.x === mouseDownPosition.current.x &&
      mouseUpPosition.y === mouseDownPosition.current.y
    ) {
      dispatch(openDetails(true));
    } else {
      if (!tasksDetails.isSideBar) dispatch(openDetails(false));
    }
  };

  return (
    <div className="w-80 font-roboto text-dark group/create">
      <div className="my-4 shadow-3xl rounded-md bg-main flex items-center gap-4">
        <div
          style={{ background: process.processColor }}
          className="w-4 h-12"
        ></div>
        <p>{process.processName}</p>
      </div>

      <div
        style={{ height: maxTasks * 150 }}
        className="p-4 my-4 shadow-md rounded-md bg-main"
      >
        {tasks
          ? tasks
              .filter((task) => task.processId === process.processId)
              .map((task, index) => (
                <button
                  key={index}
                  className="w-full flex"
                  onMouseUp={handleMouseUp}
                  onMouseDown={(event) => handleMouseDown(event, task)}
                >
                  <Droppable
                    active={activeId}
                    dropId={`${task.processId}-${task.tasksId}`}
                  >
                    <Draggable
                      dragId={`${task.processId}-${task.tasksId}`}
                      isClick={
                        tasksDetails.isSideBar || !taskPermission.manageProcess
                      }
                      handleClick={() => dispatch(openDetails(true))}
                    >
                      <BoardItem tasks={task} />
                    </Draggable>
                  </Droppable>
                </button>
              ))
          : null}

        {!tasks.some((task) => task.processId === process.processId) && (
          <Droppable active={activeId} dropId={process.processId}>
            <div className="my-4"></div>
          </Droppable>
        )}

        {/* <CreateTasksItem
          projectId={projectId as string}
          processId={process.processId}
        /> */}

        {taskPermission.addNew ? <CreateBoardItem /> : null}
      </div>
    </div>
  );
};

export default BoardTile;
4;
