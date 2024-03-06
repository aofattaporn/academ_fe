import { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";

type DraggableProps = {
  id: string;
  children: ReactNode;
};

function Draggable({ id, children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform, active } = useDraggable(
    {
      id: id,
    }
  );
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
