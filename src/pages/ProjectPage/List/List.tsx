import { DndContext } from "@dnd-kit/core";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "./ListAccordion/ListAccordion";
import ListAccordionLoading from "./ListAccordionLoading/ListAccordionLoading";
import { useState } from "react";

const List = () => {
  const { process } = useProjectPermission();
  const { allTaksIsSuccesss, tempTasks, setTempTasks } = useAllTasks();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [test, setTest] = useState<string>("");

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active && over) {
      const activeId = active.id;
      const overId = over.id;

      if (activeId !== overId) {
        const [processActive, tasksActive] = activeId.split("-");
        const [processOver, tasksOver] = overId.split("-");

        const newTasks = arrayMove(
          tempTasks,
          tempTasks.findIndex((task) => task.tasksId === tasksActive),
          tempTasks.findIndex((task) => task.tasksId === tasksOver)
        );

        if (processActive !== processOver) {
          console.log(processActive);
          setTest(processOver);

          setTempTasks(() => {
            return newTasks.map((task) => {
              if (task.tasksId === tasksActive) {
                setTest("bra!!!!");
                return { ...task, processId: processOver };
              } else {
                return task;
              }
            });
          });
        } else {
          setTempTasks(newTasks);
        }
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
      <h1 className="text-2xl font-bold">List {test}</h1>
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
