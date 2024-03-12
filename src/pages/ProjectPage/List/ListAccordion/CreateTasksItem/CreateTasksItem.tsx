import useCreateTasks from "../../../../../hooks/tasksHook/useCreateTasks";

type CreateTasksProps = {
  projectId: string;
  processId: string;
};

const CreateTasksItem = ({ projectId, processId }: CreateTasksProps) => {
  const {
    isCreating,
    inputRef,
    tasks,
    setIsCreating,
    handleButtonClick,
    handleSetTasks,
    handleSubmit,
  } = useCreateTasks({ projectId, processId });

  const cancelButton = () => {
    return (
      <button className="items-center flex justify-center text-white bottom-0">
        <p
          className="bg-gray-300 hover:bg-gray-400 p-1 px-4 rounded-md"
          onClick={() => setIsCreating(false)}
        >
          Cancel
        </p>
      </button>
    );
  };

  const saveButton = () => {
    return (
      <button
        className="items-center flex justify-center text-white bottom-0"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <p className=" bg-info hover:bg-info-dark p-1 px-4 rounded-md">Save</p>
      </button>
    );
  };

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
              {cancelButton()} {saveButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <button
      className="w-full p-1 bg-gray-100 rounded-md cursor-pointer text-gray-300"
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
