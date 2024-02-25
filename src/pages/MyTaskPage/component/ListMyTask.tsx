import { MyTasks } from "../../../types/MyTasksType";

type listMyTasksProp = {
  myTasks: MyTasks[];
  projectId: string;
  processId: string;
};

function ListMyTasks({ myTasks, processId, projectId }: listMyTasksProp) {
  return (
    <div>
      {myTasks
        .filter(
          (task) => task.process_id == processId && task.project_id == projectId
        )
        .map((item, index) => (
          <div key={index} className="flex">
            <div className="w-1/2 h-8 flex pl-8 align-middle items-center">
              <p className="text-black font-normal text-sm">{item.taskName}</p>
            </div>
            <div className="w-1/2 h-8 flex ml-4  align-middle justify-center items-center">
              <p className="text-black font-normal text-sm">{item.dueDate}</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ListMyTasks;
