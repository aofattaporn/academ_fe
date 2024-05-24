import useCreateTasks from "../../../../hooks/tasksHook/useCreateTasks";
import TasksButton from "../../../../components/Button/TasksButton";
type CreateBoardItemProps = {
  projectId: string;
  processId: string;
};

const CreateBoardItem = ({ processId, projectId }: CreateBoardItemProps) => {
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
      <div className="w-full p-1 bg-white rounded-md cursor-pointer text-gray-300 my-4 h-24 shadow-md">
        <input
          ref={inputRef}
          value={tasks}
          onChange={(e) => handleSetTasks(e.target.value)}
          className="bg-transparent bottom-0 p-4 
              border-none focus:outline-none text-dark font-normal"
        />

        <div className="flex justify-end gap-4">
          <TasksButton
            title={"Cancel"}
            isSaving={false}
            handleSave={() => setIsCreating(false)}
          />
          <TasksButton
            title={"Save"}
            isSaving={mutation.isLoading}
            handleSave={() => handleSubmit(projectId, processId)}
          />
        </div>
      </div>
    );
  }

  return (
    <button
      className="w-full p-1 bg-primary-subtle rounded-md cursor-pointer 
      text-gray-300 my-4 h-24 invisible group-hover/create:visible"
      onClick={handleButtonClick}
    >
      <div className=" w-full bg-red">
        <p>Create Tasks</p>
      </div>
    </button>
  );
};

export default CreateBoardItem;
