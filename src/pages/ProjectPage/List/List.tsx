import { DndContext } from "@dnd-kit/core";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import Droppable from "../../../hoc/Droppable";
import ListAccordion from "./ListAccordion/ListAccordion";
import ListAccordionLoading from "./ListAccordionLoading/ListAccordionLoading";
import { useState } from "react";
import Draggable from "../../../hoc/Draggable";

const List = () => {
  const { process } = useProjectPermission();
  const { allTaksIsSuccesss, allTaksData } = useAllTasks();

  const [containers, setContainers] = useState<string[]>(["A", "B", "C"]);
  const [parent, setParent] = useState("A");
  function handleDragEnd(event: any) {
    const { over } = event;
    setParent(over?.id ? over.id : over.id);
  }

  function handleDragEnd2(event: any) {
    const { active, over } = event;

    if (active && over) {
      const activeId = active.id;
      const overId = over.id;

      if (activeId !== overId) {
        const newContainers = containers.slice();
        const activeIndex = newContainers.indexOf(activeId);
        const overIndex = newContainers.indexOf(overId);

        newContainers.splice(activeIndex, 1);
        newContainers.splice(overIndex, 0, activeId);

        setContainers(newContainers);
      }
    }
  }

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">List</h1>
      {process && allTaksIsSuccesss && allTaksData
        ? process.map((item, index) => {
            return (
              <ListAccordion process={item} tasks={allTaksData} key={index} />
            );
          })
        : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
            return <ListAccordionLoading key={index} />;
          })}

      <div className="p-4 bg-amber-100">
        <h1>Drag n Drop playground - for list</h1>
        <DndContext onDragEnd={handleDragEnd}>
          {containers.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? (
                <div className="w-full h-24 flex justify-center items-center bg-green-200 my-2 rounded-md">
                  <Draggable id="draggable">
                    <div className=" flex justify-center items-center bg-primary-light rounded-md p-5">
                      Drag Me This !!!
                    </div>
                  </Draggable>
                </div>
              ) : (
                <div className="w-full h-24 flex justify-center items-center bg-green-200 my-2 rounded-md">
                  Drop Me {id} !!
                </div>
              )}
            </Droppable>
          ))}
        </DndContext>
      </div>

      <div className="p-4 bg-purple-300 my-8">
        <h1>Drag n Drop playground - for list</h1>

        <DndContext onDragEnd={handleDragEnd2}>
          {containers.map((id) => {
            return (
              <Droppable id={id}>
                <Draggable id={id}>
                  <div className="p-2 bg-red-200 w-full flex justify-center my-2">
                    {id}
                  </div>
                </Draggable>
              </Droppable>
            );
          })}
        </DndContext>
      </div>
    </div>
  );
};

export default List;
