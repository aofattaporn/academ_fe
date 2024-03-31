import { CircularProgress } from "@mui/material";
import useCreateTasks from "../../../../hooks/tasksHook/useCreateTasks";
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

  const saveButton = (isMuting: boolean) => {
    return (
      <button
        className="items-center flex justify-center text-white bottom-0"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className=" bg-info hover:bg-info-dark p-1 px-4 rounded-md flex justify-center">
          {isMuting ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <p>Save</p>
          )}
        </div>
      </button>
    );
  };

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
          {cancelButton()} {saveButton(mutation.isLoading)}
        </div>
      </div>
    );
  }

  return (
    <button
      className="w-full p-1 bg-gray-100 rounded-md cursor-pointer text-gray-300 my-4 h-24 invisible group-hover/create:visible"
      onClick={handleButtonClick}
    >
      <div className=" w-full bg-red">
        <p>Create Tasks</p>
      </div>
    </button>
  );
};

export default CreateBoardItem;
