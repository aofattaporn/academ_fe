import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import TasksButton from "../../../components/Button/TasksButton";
import ColorSelection from "../../../components/Field/ColorSelection";
import { BTN_TASKS_CANCEL, BTN_TASKS_SAVE } from "../../../types/MyTasksType";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import projectApi from "../../../libs/projectApi";
import { Project } from "../../../types/ProjectType";
import { QUERY_KEY } from "../../../types/GenericType";

const ListCreateProcess = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { projectId } = useParams<string>();
  const pathArray = window.location.pathname.split("/");
  const lastSegment = pathArray[pathArray.length - 1];

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
      projectApi.createProcess(
        projectId as string,
        {
          processId: "",
          processName: tempProcess,
          processColor: tempColor,
        },
        lastSegment
      ),
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
      <div className=" bg-white p-4">
        <button className="flex gap-4 w-full group/process">
          <div
            style={{ background: tempColor }}
            className={`w-4 h-4 flex justify-center items-center  p-4 rounded-md text-white rotate-90`}
          >
            <ExpandLessIcon />
          </div>
          <div>
            <div className="flex items-center w-full gap-8">
              <div
                style={{ background: tempColor }}
                className="h-4 w-2 py-4 rounded-sm"
              ></div>

              <input
                ref={inputRef}
                value={tempProcess}
                onChange={(e) => setTempProcess(e.target.value)}
                className="flex justify-center bg-transparent bottom-0 text-xl font-bold
              border-none focus:outline-none text-dark"
              />
              <div className="flex gap-4">
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
            <div className="ml-8">
              <ColorSelection
                disable={false}
                handleColor={(color: string) => setTempColor(color)}
                selectColor={tempColor}
              />
            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div
      className="w-full p-4 rounded-md bg-primary-subtle  hover:cursor-pointer "
      onClick={handleButtonClick}
    >
      <div className={`h-fit py-2 items-center text-gray-400`}>
        <h4>Create New Process</h4>
      </div>
    </div>
  );
};

export default ListCreateProcess;
