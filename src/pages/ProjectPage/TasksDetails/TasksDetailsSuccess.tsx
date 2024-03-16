import SaveTasksDetails from "../../../components/Button/SaveTasksDetails";
import { BTN_UPDATE_TASKS, Tasks } from "../../../types/MyTasksType";
import moment from "moment";
import { Project } from "../../../types/ProjectType";

type TasksDetailsSuccessProps = {
  tasksData: Tasks;
  projectData: Project;
};

const TasksDetailsSuccess = ({
  tasksData,
  projectData,
}: TasksDetailsSuccessProps) => {
  return (
    <div className="pt-1 overflow-hidden whitespace-nowrap overflow-ellipsis w-full">
      <h2 className="text-3xl min-h-2 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
        {tasksData.tasksName}
      </h2>

      <div className="my-8 grid grid-cols-1 gap-4">
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Project
          </p>
          <p className="bg-primary-subtle py-2 w-80 flex justify-center rounded-md text-gray-400">
            {projectData?.projectInfo.projectProfile.projectName}
          </p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Start date
          </p>
          <button className="py-2 w-80 flex justify-center rounded-md border-2">
            {moment(tasksData.startDate).format("l")}
          </button>
        </div>
        <div className="flex gap-8 items-center">
          <p className="bg-main py-2 w-32 flex justify-center rounded-md">
            Due date
          </p>
          <button className="py-2 w-80 flex justify-center rounded-md border-2">
            {moment(tasksData.dueDate).format("l")}
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
  );
};

export default TasksDetailsSuccess;
