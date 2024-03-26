import { ReactNode } from "react";
import { useDraggable } from "@dnd-kit/core";

type DraggableProps = {
  dragId: string;
  children: ReactNode;
  isClick: boolean;
  handleClick: () => void;
};

function Draggable({ dragId, children, isClick, handleClick }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragId,
    disabled: isClick,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      className={`w-full`}
      onClick={handleClick}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}

export default Draggable;
