import { mockedTasks } from "../../../types/MyTasksType";
import { Process } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "./ListAccordion/ListAccordion";

const tempProcess: Process[] = [
  {
    processId: "1",
    processName: "To Do",
    processColor: "#C2C2C2",
  },
  {
    processId: "2",
    processName: "Inprogress",
    processColor: "#F9E116",
  },
  {
    processId: "3",
    processName: "Done",
    processColor: "#72C554",
  },
];

const List = () => {
  const { taskPermission } = useProjectPermission();
  console.log(taskPermission);
  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">List</h1>

      {tempProcess.map((process, index) => {
        return (
          <ListAccordion process={process} tasks={mockedTasks} key={index} />
        );
      })}
    </div>
  );
};

export default List;
