import { DndContext } from "@dnd-kit/core";
import { Alert, Button } from "@mui/material";
import ListAccordionLoading from "../../../components/ListAccordion/ListAccordionLoading/ListAccordionLoading";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import BoardTile from "./BoardTile/BoardTile";

const Board = () => {
  const { process, taskPermission } = useProjectPermission();

  const {
    allTaksIsSuccesss,
    allTaksIsError,
    allTasksError,
    allTaksData,
    tempTasks,
    activeId,
    mutation,
    handleDragStart,
    handleDragEnd,
    navigate,
  } = useAllTasks();

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">Board</h1>
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
        <div className="flex gap-12">
          {process && allTaksIsSuccesss && tempTasks && taskPermission
            ? process.map((item, index) => {
                return (
                  <BoardTile
                    key={index}
                    process={item}
                    tasks={allTaksData}
                    taskPermission={taskPermission}
                    activeId={activeId}
                  />
                );
              })
            : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
                return <ListAccordionLoading key={index} />;
              })}
        </div>
      </DndContext>
    </div>
  );
};

export default Board;
