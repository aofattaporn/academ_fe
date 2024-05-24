import useCreateTasks from "../../../../hooks/tasksHook/useCreateTasks";
import "react-toastify/dist/ReactToastify.css";
import TasksButton from "../../../Button/TasksButton";
import {
  BTN_TASKS_CANCEL,
  BTN_TASKS_SAVE,
} from "../../../../types/MyTasksType";

type CreateTasksProps = {
  projectId: string;
  processId: string;
};

const CreateTasksItem = ({ projectId, processId }: CreateTasksProps) => {
  const {
    isCreating,
    inputRef,
    mutation,
    tasks,
    setIsCreating,
    handleButtonClick,
    handleSetTasks,
    handleSubmit,
  } = useCreateTasks();

  if (isCreating) {
    return (
      <div className="w-full p-1 rounded-md cursor-pointer text-gray-300">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-20">
            <input
              ref={inputRef}
              value={tasks}
              onChange={(e) => handleSetTasks(e.target.value)}
              className="flex justify-center ml-20 bg-transparent bottom-0 
              border-none focus:outline-none text-dark font-normal"
            />

            <div className="flex gap-4">
              <TasksButton
                title={BTN_TASKS_CANCEL}
                isSaving={false}
                handleSave={() => setIsCreating(false)}
              />
              <TasksButton
                title={BTN_TASKS_SAVE}
                isSaving={mutation.isLoading}
                handleSave={() => handleSubmit(projectId, processId)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button
      className="w-full p-1 bg-primary-subtle rounded-md cursor-pointer text-gray-300 invisible group-hover/create:visible"
      onClick={handleButtonClick}
    >
      <div className="flex gap-4 items-center">
        <div className="ps-12 w-full grid grid-cols-4 gap-4 font-bold">
          <p className="text-center">Create Tasks</p>
        </div>
      </div>
    </button>
  );
};

export default CreateTasksItem;
