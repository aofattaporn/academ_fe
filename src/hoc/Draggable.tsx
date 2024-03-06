import { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";

type DraggableProps = {
  dragId: string;
  children: ReactNode;
};

function Draggable({ dragId, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragId,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button
      className={`w-full`}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}

export default Draggable;
