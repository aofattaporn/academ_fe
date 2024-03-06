import { DndContext } from "@dnd-kit/core";
import Draggable from "../../../hoc/Draggable";
import Droppable from "../../../hoc/Droppable";
import { useState } from "react";

const DragDropPlayGround = () => {
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
    <>
      <div className="p-4 bg-amber-100">
        <h1>Drag n Drop playground - for list</h1>
        <DndContext onDragEnd={handleDragEnd}>
          {containers.map((id) => (
            <Droppable active={"id"} key={id} dropId={id}>
              {parent === id ? (
                <div className="w-full h-24 flex justify-center items-center bg-green-200 my-2 rounded-md">
                  <Draggable dragId="draggable" dropId="s">
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
              <Droppable active={"id"} dropId={id}>
                <Draggable dragId={id} dropId={id}>
                  <div className="p-2 bg-red-200 w-full flex justify-center my-2">
                    {id}
                  </div>
                </Draggable>
              </Droppable>
            );
          })}
        </DndContext>
      </div>
    </>
  );
};

export default DragDropPlayGround;
