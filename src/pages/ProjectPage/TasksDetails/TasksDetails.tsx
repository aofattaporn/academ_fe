import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import { openDetails } from "../../../stores/projectSlice/tastsDetailsSlice";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import moment from "moment";
import CreateProjectButtonComp from "../../../components/Button/CreateProjectButtonComp";
import { BTN_CREATE_PROJECT } from "../../../types/ProjectType";
import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import { BTN_UPDATE_TASKS } from "../../../types/MyTasksType";

function TasksDetails() {
  const dispatch = useDispatch();
  const tasksDetails = useSelector((state: RootState) => state.tasksDetails);

  return (
    <div
      className={`duration-700 overflow-x-hidden bg-white max-h-full shadow-3xl h-screen font-roboto text-dark
      ${tasksDetails.isSideBar ? "md:w-4/6 lg:w-2/6 w-full" : "w-0"}`}
    >
      <div className="py-8 pl-4 pr-12">
        <div className="flex gap-4 items-start">
          <IconButton onClick={() => dispatch(openDetails(false))}>
            <CloseIcon />
          </IconButton>
          <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
            <h2 className="text-3xl min-h-2 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
              Task 1 to do list
            </h2>

            <div className="my-8 grid grid-cols-1 gap-4">
              <div className="flex gap-8 items-center">
                <p className="bg-main py-2 w-32 flex justify-center rounded-md">
                  Project
                </p>
                <p className="bg-primary-subtle py-2 w-80 flex justify-center rounded-md text-gray-400">
                  JIT:D
                </p>
              </div>
              <div className="flex gap-8 items-center">
                <p className="bg-main py-2 w-32 flex justify-center rounded-md">
                  Start date
                </p>
                <button className="py-2 w-80 flex justify-center rounded-md border-2">
                  {moment().format("l")}
                </button>
              </div>
              <div className="flex gap-8 items-center">
                <p className="bg-main py-2 w-32 flex justify-center rounded-md">
                  Due date
                </p>
                <button className="py-2 w-80 flex justify-center rounded-md border-2">
                  {moment().format("l")}
                </button>
              </div>
            </div>

            <div className="my-8 w-full grid grid-cols-1 gap-4">
              <p>Description</p>
              <div className="w-full border-2 border-primary-light h-40 rounded-md p-4">
                <p className=" text-gray-300">What is task is about</p>
              </div>
            </div>

            <SaveTasksDetails
              title={BTN_UPDATE_TASKS}
              disable={true}
              isSaving={false}
              handleChange={() => console.log("test")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksDetails;
