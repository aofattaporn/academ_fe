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
      ref={setNodeRef}
      className={`w-full ${
        isOver && dropId !== active
          ? "border-primary-light border-b-2 border-solid"
          : "border-gray-200 border-b-2 border-solid "
      }`}
    >
      {children}
    </div>
  );
}

export default Droppable;
