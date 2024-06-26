import Draggable from "../../../../hoc/Draggable";
import Droppable from "../../../../hoc/Droppable";
import { openDetails } from "../../../../stores/projectSlice/tastsDetailsSlice";
import { Tasks } from "../../../../types/MyTasksType";
import { Process } from "../../../../types/ProjectType";
import BoardItem from "../BoardItem/BoardItem";
import CreateBoardItem from "../CreateBoardItem/CreateBoardItem";
import useTasksHandle from "../../../../hooks/tasksHook/useTasksHandler";
import { TaskPermission } from "../../../../types/Permission";
import BoardHeader from "../BoardHeader/BoardHeader";

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
  const { tasksDetails, dispatch, handleMouseDown, handleMouseUp, projectId } =
    useTasksHandle();

  return (
    <div className="w-80 min-w-80 px-1 font-roboto text-dark group/create">
      <BoardHeader
        processColor={process.processColor}
        processName={process.processName}
        processId={process.processId}
        tasksLength={
          tasks.filter((item) => item.processId === process.processId).length
        }
      />

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
                      <BoardItem tasks={task} taskPermission={taskPermission} />
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

        {taskPermission.addNew ? (
          <CreateBoardItem
            projectId={projectId as string}
            processId={process.processId}
          />
        ) : null}
      </div>
    </div>
  );
};

export default BoardTile;
4;
