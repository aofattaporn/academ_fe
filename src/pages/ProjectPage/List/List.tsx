import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "./ListAccordion/ListAccordion";
import ListAccordionLoading from "./ListAccordionLoading/ListAccordionLoading";

const List = () => {
  const { process } = useProjectPermission();
  const { allTaksIsSuccesss, allTaksData } = useAllTasks();

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">List</h1>
      {process && allTaksIsSuccesss && allTaksData
        ? process.map((item, index) => {
            return (
              <ListAccordion process={item} tasks={allTaksData} key={index} />
            );
          })
        : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
            return <ListAccordionLoading key={index} />;
          })}
    </div>
  );
};

export default List;
