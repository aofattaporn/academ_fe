import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import { BTN_UPDATE_TASKS } from "../../../types/MyTasksType";

const TasksDetailsLoading = () => {
  return (
    <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
      <h2 className="font-bold overflow-hidden whitespace-nowrap bg-gray-200 animate-pulse rounded-md h-12"></h2>
      <div className="my-8 grid grid-cols-1 gap-4">
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Project
          </p>
          <p className="bg-gray-200 h-full w-80 rounded-md animate-pulse"></p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Start date
          </p>
          <p className="bg-gray-200 h-full w-80 rounded-md animate-pulse"></p>{" "}
        </div>
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Due date
          </p>
          <p className="bg-gray-200 h-full w-80 rounded-md animate-pulse"></p>{" "}
        </div>
      </div>

      <div className="my-8 w-full grid grid-cols-1 gap-4">
        <p>Description</p>
        <div className="w-full h-40 rounded-md p-4 bg-gray-200 animate-pulse"></div>
      </div>

      <SaveTasksDetails
        title={BTN_UPDATE_TASKS}
        disable={true}
        isSaving={false}
        handleChange={() => console.log("test")}
      />
    </div>
  );
};

export default TasksDetailsLoading;
