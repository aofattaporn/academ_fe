import { DndContext } from "@dnd-kit/core";
import { Alert, Button } from "@mui/material";
import ListAccordionLoading from "../../../components/ListAccordion/ListAccordionLoading/ListAccordionLoading";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import BoardTile from "./BoardTile/BoardTile";
import { Tasks } from "../../../types/MyTasksType";
import BoardCreateProcess from "./BoradCreateProcess/BoardCreateProcess";
import CreateTasksByDate from "../Calendar/CreateTasksByDate/CreateTasksByDate";
import { useState } from "react";

const Board = () => {
  const { process, taskPermission } = useProjectPermission();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    findMaxTasks,
  } = useAllTasks();

  return (
    <div className="p-6 text-dark font-roboto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Board</h1>
        <button
          className="test py-1.5 px-2 text-white rounded-[4px]"
          onClick={() => setIsOpen(true)}
        >
          Add Task
        </button>
        {taskPermission && isOpen ? (
          <CreateTasksByDate
            handleClose={() => setIsOpen(false)}
            taskPermission={taskPermission}
          />
        ) : null}
      </div>

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
      <div className="overflow-x-scroll min-w-96 ">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="flex gap-12">
            {process &&
            allTaksIsSuccesss &&
            tempTasks &&
            taskPermission &&
            allTaksData
              ? process.map((item, index) => {
                  return (
                    <BoardTile
                      key={index}
                      process={item}
                      tasks={allTaksData}
                      taskPermission={taskPermission}
                      activeId={activeId}
                      maxTasks={findMaxTasks(allTaksData as Tasks[])}
                    />
                  );
                })
              : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
                  return <ListAccordionLoading key={index} />;
                })}

            {taskPermission && taskPermission.edit ? (
              <BoardCreateProcess />
            ) : null}
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default Board;
