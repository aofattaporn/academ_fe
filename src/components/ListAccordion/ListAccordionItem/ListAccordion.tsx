import { openDetails } from "../../../stores/projectSlice/tastsDetailsSlice";
import TasksTile from "./TasksTile/TasksTile";
import TaksTitle from "./TaksTitle/TaksTitle";
import Droppable from "../../../hoc/Droppable";
import Draggable from "../../../hoc/Draggable";
import ProcessTitle from "./ProcessTitle/ProcessTitle";
import CreateTasksItem from "./CreateTasksItem/CreateTasksItem";
import SettingTasksTile from "./SettingTasksTile/SettingTasksTile";
import { Process } from "../../../types/ProjectType";
import { Tasks } from "../../../types/MyTasksType";
import useTasksHandle from "../../../hooks/tasksHook/useTasksHandler";
import { TaskPermission } from "../../../types/Permission";
import { useState } from "react";

type ListAccordionProps = {
  taskPermission: TaskPermission;
  activeId: string | null;
  process: Process;
  tasks: Tasks[];
};

const ListAccordion = ({
  process,
  activeId,
  tasks,
  taskPermission,
}: ListAccordionProps) => {
  const {
    projectId,
    tasksDetails,
    isToggle,
    dispatch,
    handleToggle,
    handleMouseDown,
    handleMouseUp,
  } = useTasksHandle();

  return (
    <div className="w-full p-4 rounded-md shadow-3xl my-4  group/create">
      <h1 className="text-3xl font-bold"></h1>
      <ProcessTitle
        handleToggle={handleToggle}
        isToggle={isToggle}
        processId={process.processId}
        processColor={process.processColor}
        processName={process.processName}
        tasksLength={
          tasks.filter((task) => task.processId === process.processId).length
        }
      />

      <div
        className={`duration-300 ${
          isToggle ? "h-fit mt-4" : "h-0 overflow-hidden"
        }`}
      >
        <TaksTitle isEdit={taskPermission.edit} />
        {tasks
          .filter((task) => task.processId === process.processId)
          .map((task, index) => (
            <div
              className="flex justify-between group items-center"
              key={index}
            >
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
                    isClick={
                      tasksDetails.isSideBar || !taskPermission.manageProcess
                    }
                    handleClick={() => dispatch(openDetails(true))}
                  >
                    <TasksTile task={task} />
                  </Draggable>
                </Droppable>
              </button>
              {taskPermission.delete ? (
                <SettingTasksTile tasksId={task.tasksId} isVisible={false} />
              ) : null}
            </div>
          ))}
        {!tasks.some((task) => task.processId === process.processId) && (
          <Droppable active={activeId} dropId={process.processId}>
            <div className="my-4"></div>
          </Droppable>
        )}

        {taskPermission.addNew ? (
          <CreateTasksItem
            projectId={projectId as string}
            processId={process.processId}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ListAccordion;
