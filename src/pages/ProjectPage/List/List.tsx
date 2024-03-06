import { DndContext } from "@dnd-kit/core";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "./ListAccordion/ListAccordion";
import ListAccordionLoading from "./ListAccordionLoading/ListAccordionLoading";
import Droppable from "../../../hoc/Droppable";
import { useState } from "react";
import Draggable from "../../../hoc/Draggable";

const List = () => {
  const { process } = useProjectPermission();
  const { allTaksIsSuccesss, allTaksData } = useAllTasks();
  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">List</h1>
      <DndContext onDragStart={handleDragStart}>
        {process && allTaksIsSuccesss && allTaksData
          ? process.map((item, index) => {
              return (
                <ListAccordion process={item} tasks={allTaksData} key={index} />
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
