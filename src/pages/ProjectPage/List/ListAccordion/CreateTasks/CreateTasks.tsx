import { useState, useRef } from "react";
import useAllTasks from "../../../../../hooks/tasksHook/useAllTasks";

const CreateTasks = () => {
  const { allTaksRefetch } = useAllTasks();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    setIsCreating(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const handleSetTasks = (tasksName: string) => {
    setTasks(tasksName);
  };

  if (isCreating) {
    return (
      <button className="w-full p-1 rounded-md cursor-pointer text-gray-300">
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
              <button className="items-center flex justify-center text-white bottom-0">
                <p
                  className="bg-gray-300 hover:bg-gray-400 p-1 px-4 rounded-md"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </p>
              </button>
              <button className="items-center flex justify-center text-white bottom-0">
                <p
                  className=" bg-info hover:bg-info-dark p-1 px-4 rounded-md"
                  onClick={() => allTaksRefetch()}
                >
                  Save
                </p>
              </button>
            </div>
          </div>
        </div>
      </button>
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

export default CreateTasks;
