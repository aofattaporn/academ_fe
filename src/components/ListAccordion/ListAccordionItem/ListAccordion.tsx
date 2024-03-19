import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  openDetails,
  seletedId,
} from "../../../stores/projectSlice/tastsDetailsSlice";
import { RootState } from "../../../stores/store";
import TasksTile from "./TasksTile/TasksTile";
import TaksTitle from "./TaksTitle/TaksTitle";
import Droppable from "../../../hoc/Droppable";
import Draggable from "../../../hoc/Draggable";
import ProcessTitle from "./ProcessTitle/ProcessTitle";
import CreateTasksItem from "./CreateTasksItem/CreateTasksItem";
import SettingTasksTile from "./SettingTasksTile/SettingTasksTile";
import { Process } from "../../../types/ProjectType";
import { Tasks } from "../../../types/MyTasksType";

type ListAccordionProps = {
  activeId: string | null;
  process: Process;
  tasks: Tasks[];
};

const ListAccordion = ({ process, activeId, tasks }: ListAccordionProps) => {
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const mouseDownPosition = useRef({ x: 0, y: 0 });

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

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
    <div className="w-full p-4 rounded-md shadow-3xl my-4">
      <h1 className="text-3xl font-bold"></h1>
      <ProcessTitle
        handleToggle={handleToggle}
        isToggle={isToggle}
        processColor={process.processColor}
        processName={process.processName}
      />

      <div
        className={`duration-300 ${
          isToggle ? "h-fit mt-4" : "h-0 overflow-hidden"
        }`}
      >
        <TaksTitle />
        {tasks
          .filter((task) => task.processId === process.processId)
          .map((task, index) => (
            <div className="flex justify-between group" key={index}>
              <button
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
                    isClick={tasksDetails.isSideBar}
                    handleClick={() => dispatch(openDetails(true))}
                  >
                    <TasksTile task={task} />
                  </Draggable>
                </Droppable>
              </button>
              <SettingTasksTile tasksId={task.tasksId} />
            </div>
          ))}
        {!tasks.some((task) => task.processId === process.processId) && (
          <Droppable active={activeId} dropId={process.processId}>
            <div className="my-4"></div>
          </Droppable>
        )}
        <CreateTasksItem
          projectId={projectId as string}
          processId={process.processId}
        />
      </div>
    </div>
  );
};

export default ListAccordion;
