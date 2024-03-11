import { useRef, useState } from "react";
import TasksTile from "./TasksTile/TasksTile";
import TaksTitle from "./TaksTitle/TaksTitle";
import { Process } from "../../../../types/ProjectType";
import { Tasks } from "../../../../types/MyTasksType";
import Droppable from "../../../../hoc/Droppable";
import Draggable from "../../../../hoc/Draggable";
import { useDispatch, useSelector } from "react-redux";
import {
  openDetails,
  seletedId,
} from "../../../../stores/projectSlice/tastsDetailsSlice";
import { RootState } from "../../../../stores/store";
import ProcessTitle from "./ProcessTitle/ProcessTitle";

type ListAccordionProps = {
  activeId: string | null;
  process: Process;
  tasks: Tasks[];
};
const ListAccordion = ({ process, activeId, tasks }: ListAccordionProps) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  const dispatch = useDispatch();
  const mouseDownPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement>,
    tasks: Tasks
  ) => {
    mouseDownPosition.current = { x: event.clientX, y: event.clientY };
    dispatch(seletedId(tasks.tasksId));
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
    <div className="w-full p-4 rounded-md shadow-3xl my-4">
      <h1 className="text-3xl font-bold"></h1>
      <ProcessTitle
        handleToggle={() => setIsToggle(!isToggle)}
        isToggle={isToggle}
        processColor={process.processColor}
        processName={process.processName}
      />

      <div
        className={`duration-300  ${
          isToggle ? "h-fit mt-4" : "h-0 overflow-hidden"
        } `}
      >
        <TaksTitle />

        <div>
          {tasks
            .filter((task, _) => task.processId === process.processId)
            .map((item, index) => {
              if (item)
                return (
                  <button
                    className="w-full"
                    onMouseUp={handleMouseUp}
                    onMouseDown={(event) => handleMouseDown(event, item)}
                  >
                    <Droppable
                      active={activeId}
                      dropId={`${item.processId}-${item.tasksId}`}
                      key={index}
                    >
                      <Draggable
                        dragId={`${item.processId}-${item.tasksId}`}
                        isClick={tasksDetails.isSideBar}
                        handleClick={() => dispatch(openDetails(true))}
                      >
                        <TasksTile task={item} key={index} />
                      </Draggable>
                    </Droppable>
                  </button>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default ListAccordion;
