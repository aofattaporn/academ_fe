import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import TasksTile from "./TasksTile/TasksTile";
import TaksTitle from "./TaksTitle/TaksTitle";
import { Process } from "../../../../types/ProjectType";
import { Tasks } from "../../../../types/MyTasksType";
import Droppable from "../../../../hoc/Droppable";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../../../../hoc/Draggable";

type ListAccordionProps = {
  process: Process;
  tasks: Tasks[];
};
const ListAccordion = ({ process, tasks }: ListAccordionProps) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const [tempTasks, setTempTasks] = useState<Tasks[]>(tasks);
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleToggle = (isToggle: boolean) => setIsToggle(isToggle);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active && over) {
      const activeId = active.id;
      const overId = over.id;

      if (activeId !== overId) {
        const newTasks = arrayMove(
          tempTasks,
          tempTasks.findIndex((task) => task.tasksId === activeId),
          tempTasks.findIndex((task) => task.tasksId === overId)
        );

        setTempTasks(newTasks);
      }
    }
  };

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function arrayMove<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const newArray = [...array];
    const [removedElement] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, removedElement);
    return newArray;
  }

  return (
    <div className="w-full p-4 rounded-md shadow-3xl my-4">
      <button
        className="flex gap-4 w-full"
        onClick={() => handleToggle(!isToggle)}
      >
        <div
          style={{ background: process.processColor }}
          className={`w-4 h-4 flex justify-center items-center  p-4 rounded-md text-white
          ${isToggle ? "rotate-180" : "rotate-90"} `}
        >
          <ExpandLessIcon />
        </div>
        <div className="flex items-center w-full">
          <div
            style={{ background: process.processColor }}
            className="h-4 w-2 py-4 rounded-sm"
          ></div>
          <p className="text-xl font-bold pl-6">{process.processName}</p>
        </div>
      </button>

      <div
        className={`duration-300 overflow-hidden ${
          isToggle ? "h-fit mt-4" : "h-0"
        } `}
      >
        <TaksTitle />

        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div>
            {tempTasks
              .filter((task, _) => task.processId === process.processId)
              .map((item, index) => {
                return (
                  <Droppable active={activeId} dropId={item.tasksId}>
                    <Draggable dragId={item.tasksId} dropId={item.tasksId}>
                      <TasksTile task={item} key={index} />
                    </Draggable>
                  </Droppable>
                );
              })}
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default ListAccordion;
