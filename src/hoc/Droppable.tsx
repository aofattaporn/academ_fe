import { ReactNode } from "react";
import { useDroppable } from "@dnd-kit/core";

type DroppableProps = {
  active: string | null;
  dropId: string;
  children: ReactNode;
};
function Droppable({ active, dropId, children }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: dropId,
  });

  return (
    <div
      className={`w-full ${
        isOver && active !== dropId ? "bg-gray-100 p-2" : undefined
      }`}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
}

export default Droppable;
