import { DndContext } from "@dnd-kit/core";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "../../../components/ListAccordion/ListAccordionItem/ListAccordion";
import ListAccordionLoading from "../../../components/ListAccordion/ListAccordionLoading/ListAccordionLoading";

import { Alert, Button } from "@mui/material";
import ListCreateProcess from "./ListCreateProcess";

const List = () => {
  const { process, taskPermission } = useProjectPermission();
  const {
    allTaksIsSuccesss,
    allTaksIsError,
    allTasksError,
    tempTasks,
    mutation,
    activeId,
    handleDragStart,
    handleDragEnd,
    navigate,
  } = useAllTasks();

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">List</h1>
      {(allTaksIsError && allTasksError) || mutation.isError ? (
        <Alert severity="error" className="my-8">
          Something went wrong
          <Button
            size="small"
            className="normal-case"
            onClick={() => navigate(0)}
          >
            Try Again
          </Button>
        </Alert>
      ) : null}
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {process && allTaksIsSuccesss && tempTasks && taskPermission
          ? process.map((item, index) => {
              return (
                <ListAccordion
                  tasks={tempTasks}
                  process={item}
                  key={index}
                  activeId={activeId}
                  taskPermission={taskPermission}
                  isShowManageProcess={true}
                />
              );
            })
          : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
              return <ListAccordionLoading key={index} />;
            })}

        {taskPermission && taskPermission.edit ? <ListCreateProcess /> : null}
      </DndContext>
    </div>
  );
};

export default List;
