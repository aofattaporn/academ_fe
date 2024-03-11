import { DndContext } from "@dnd-kit/core";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "./ListAccordion/ListAccordion";
import ListAccordionLoading from "./ListAccordionLoading/ListAccordionLoading";
import { useState } from "react";
import { useDispatch } from "react-redux";

enum DragState {
  NONE,
  CLICK,
  MOVE,
  PRESSED,
}

const List = () => {
  const { process } = useProjectPermission();
  const { allTaksIsSuccesss, tempTasks, setTempTasks } = useAllTasks();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [message, setMessage] = useState<DragState>(DragState.NONE);

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    // TODO : STEP 1 check process change

    // TODO : step 2 reorder of tasks
    const { active, over } = event;

    if (active && over) {
      const activeId = active.id;
      const overId = over.id;

      if (activeId !== overId) {
        const activeSplit: string = activeId.split("-")[1];
        const overSplit: string = overId.split("-")[1];

        const newTasks = arrayMove(
          tempTasks,
          tempTasks.findIndex((task) => task.tasksId === activeSplit),
          tempTasks.findIndex((task) => task.tasksId === overSplit)
        );

        setTempTasks(newTasks);
      }
    }
  };

  function arrayMove<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const newArray = [...array];
    const [removedElement] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, removedElement);
    return newArray;
  }

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">List</h1>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragMove={() => setMessage(DragState.MOVE)}
      >
        {process && allTaksIsSuccesss && tempTasks
          ? process.map((item, index) => {
              return (
                <ListAccordion
                  activeId={activeId}
                  process={item}
                  tasks={tempTasks}
                  key={index}
                />
              );
            })
          : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
              return <ListAccordionLoading key={index} />;
            })}
      </DndContext>
    </div>
  );
};

export default List;
