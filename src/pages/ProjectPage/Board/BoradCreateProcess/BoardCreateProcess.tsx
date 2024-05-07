import { useRef, useState } from "react";

import { useQueryClient, useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TasksButton from "../../../../components/Button/TasksButton";
import ColorSelection from "../../../../components/Field/ColorSelection";
import projectApi from "../../../../libs/projectApi";
import { QUERY_KEY } from "../../../../types/GenericType";
import {
  BTN_TASKS_CANCEL,
  BTN_TASKS_SAVE,
} from "../../../../types/MyTasksType";
import { Project } from "../../../../types/ProjectType";

const BoardCreateProcess = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { projectId } = useParams<string>();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [tempColor, setTempColor] = useState<string>("#BDBDBD");
  const [tempProcess, setTempProcess] = useState<string>("");

  const queryClient = useQueryClient();

  const handleButtonClick = () => {
    setIsCreating(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  const updateProcess = useMutation({
    mutationFn: () =>
      projectApi.createProcess(projectId as string, {
        processId: "",
        processName: tempProcess,
        processColor: tempColor,
      }),
    onSuccess: (data: Project) => {
      setTempColor("#BDBDBD");
      setTempProcess("");
      setIsCreating(false);
      queryClient.setQueryData([QUERY_KEY.PROJECR, projectId], data);
    },
    onError: () => {
      toast.error("Failed to update project details");
    },
  });

  const handleReset = () => {
    setIsCreating(false);
    setTempProcess("");
    setTempColor("#BDBDBD");
  };

  if (isCreating) {
    return (
      <div className="w-80 min-w-80 px-1 font-roboto text-dark group/create">
        <div className="my-4 shadow-3xl rounded-md bg-main flex items-center gap-4">
          <div style={{ background: tempColor }} className="w-4 h-12"></div>

          <input
            ref={inputRef}
            value={tempProcess}
            onChange={(e) => setTempProcess(e.target.value)}
            className="flex justify-center bg-transparent bottom-0 text-xl font-bold
              border-none focus:outline-none text-dark"
          />
        </div>
        <div className="ml-8">
          <ColorSelection
            disable={false}
            handleColor={(color: string) => setTempColor(color)}
            selectColor={tempColor}
          />
        </div>
        <div className="flex gap-4 ml-8">
          <TasksButton
            title={BTN_TASKS_CANCEL}
            isSaving={updateProcess.isLoading}
            handleSave={handleReset}
          />
          <TasksButton
            title={BTN_TASKS_SAVE}
            isSaving={updateProcess.isLoading}
            handleSave={updateProcess.mutate}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="my-4 w-80 min-w-80 p-2 rounded-md  bg-gray-100 hover:cursor-pointer "
      onClick={handleButtonClick}
    >
      <div className={`h-fit py-2 items-center text-gray-200`}>
        <h4>Create New Process</h4>
      </div>
    </div>
  );
};

export default BoardCreateProcess;
