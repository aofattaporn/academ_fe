import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import {
  seletedId,
  openDetails,
} from "../../stores/projectSlice/tastsDetailsSlice";
import { RootState } from "../../stores/store";
import { Tasks } from "../../types/MyTasksType";
import { useParams } from "react-router-dom";

const useTasksHandle = () => {
  const { projectId } = useParams();
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);
  const dispatch = useDispatch();
  const mouseDownPosition = useRef({ x: 0, y: 0 });

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const handleMouseDown = (
    event: React.MouseEvent<HTMLButtonElement>,
    task: Tasks
  ) => {
    mouseDownPosition.current = { x: event.clientX, y: event.clientY };
    dispatch(seletedId(task.tasksId));
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const mouseUpPosition = { x: event.clientX, y: event.clientY };
    if (
      mouseUpPosition.x === mouseDownPosition.current.x &&
      mouseUpPosition.y === mouseDownPosition.current.y
    ) {
      dispatch(openDetails(true));
    } else {
      if (!tasksDetails.isSideBar) dispatch(openDetails(false));
    }
  };

  return {
    projectId,
    tasksDetails,
    mouseDownPosition,
    isToggle,
    dispatch,
    handleToggle,
    handleMouseDown,
    handleMouseUp,
  };
};

export default useTasksHandle;
