import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import TasksTile from "./TasksTile/TasksTile";
import TaksTitle from "./TaksTitle/TaksTitle";
import { Process } from "../../../../types/ProjectType";
import { Tasks } from "../../../../types/MyTasksType";
import Droppable from "../../../../hoc/Droppable";
import Draggable from "../../../../hoc/Draggable";

type ListAccordionProps = {
  activeId: string | null;
  process: Process;
  tasks: Tasks[];
};
const ListAccordion = ({ process, activeId, tasks }: ListAccordionProps) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const handleToggle = (isToggle: boolean) => setIsToggle(isToggle);

  return (
    <div className="w-full p-4 rounded-md shadow-3xl my-4">
      <h1 className=" text-3xl font-bold">{}</h1>
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
        className={`duration-300  ${
          isToggle ? "h-fit mt-4" : "h-0 overflow-hidden"
        } `}
      >
        <TaksTitle />

        <div>
          {tasks
            .filter((task, _) => task.processId === process.processId)
            .map((item, index) => {
              return (
                <Droppable
                  active={activeId}
                  dropId={`${item.processId}-${item.tasksId}`}
                  key={index}
                >
                  <Draggable
                    dragId={`${item.processId}-${item.tasksId}`}
                    isClick={false}
                    handleClick={() => console.log("click!!!")}
                  >
                    <TasksTile task={item} key={index} />
                  </Draggable>
                </Droppable>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ListAccordion;
