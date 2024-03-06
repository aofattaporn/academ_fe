import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  id: string;
  children: ReactNode;
};
function Droppable({ id, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  return (
    <div
      className={`w-full ${isOver ? " bg-gray-100 p-2" : undefined}`}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}

export default Droppable;
