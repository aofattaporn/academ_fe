import { CircularProgress } from "@mui/material";
import { BTN_TASKS_SAVE } from "../../types/MyTasksType";

type CreateTasksProps = {
  title: string;
  isSaving: boolean;
  handleSave: () => void;
};

const TasksButton = ({ title, isSaving, handleSave }: CreateTasksProps) => {
  return (
    <button
      className="items-center flex justify-center text-white bottom-0"
      onClick={(e) => {
        e.preventDefault();
        handleSave();
      }}
    >
      <div
        className={`
        ${
          title === BTN_TASKS_SAVE
            ? "bg-info hover:bg-info-dark"
            : "bg-gray-200 hover:bg-gray-300"
        } 
        p-1 px-4 rounded-md flex justify-center`}
      >
        {isSaving ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <p>{title}</p>
        )}
      </div>
    </button>
  );
};

export default TasksButton;
