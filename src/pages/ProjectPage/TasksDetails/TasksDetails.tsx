import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { openDetails } from "../../../stores/projectSlice/tastsDetailsSlice";

function TasksDetails() {
  const dispatch = useDispatch();
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  return (
    <div
      className={`${
        tasksDetails.isSideBar ? "w-2/6" : "w-0"
      } bg-white h-screen shadow-md duration-700 overflow-hidden`}
    >
      <button onClick={() => dispatch(openDetails(false))}>Close</button>
      <h1>Test Hwllo world</h1>
    </div>
  );
}

export default TasksDetails;
