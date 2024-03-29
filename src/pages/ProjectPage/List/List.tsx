import { DndContext } from "@dnd-kit/core";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import { COUNT_ITEMS_SKELETON } from "../../../types/ProjectType";
import { useProjectPermission } from "../ProjectPage";
import ListAccordion from "../../../components/ListAccordion/ListAccordionItem/ListAccordion";
import ListAccordionLoading from "../../../components/ListAccordion/ListAccordionLoading/ListAccordionLoading";
import { useState } from "react";
import { useMutation } from "react-query";
import tasksApi from "../../../libs/tasksApi";
import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { process, taskPermission } = useProjectPermission();
  const {
    allTaksIsSuccesss,
    tempTasks,
    allTaksIsError,
    allTasksError,
    setTempTasks,
  } = useAllTasks();
  const [activeId, setActiveId] = useState<string | null>(null);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ tasks, processId }: { tasks: string; processId: string }) =>
      tasksApi.changeProcess(tasks, processId),
  });

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!active || !over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId !== overId) {
      const [processActive, tasksActive] = activeId.split("-");
      const [processOver, tasksOver] = overId.split("-");

      const newTasks = arrayMove(
        tempTasks,
        tempTasks.findIndex((task) => task.tasksId === tasksActive),
        tempTasks.findIndex((task) => task.tasksId === tasksOver)
      );

      if (processActive !== processOver) {
        mutation.mutate({ tasks: tasksActive, processId: processOver });
        setTempTasks(() => {
          return newTasks.map((task) => {
            if (task.tasksId === tasksActive) {
              return { ...task, processId: processOver };
            } else {
              return task;
            }
          });
        });
      } else {
        setTempTasks(newTasks);
      }
    }
  };

  function arrayMove<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const newArray = [...array];
    const [removedElement] = newArray.splice(fromIndex, 1);
    newArray.splice(toIndex, 0, removedElement);
    return newArray;
  }

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
                  activeId={activeId}
                  taskPermission={taskPermission}
                  process={item}
                  tasks={tempTasks}
                  key={index}
                />
              );
            })
          : Array.from({ length: COUNT_ITEMS_SKELETON }).map((_, index) => {
              return <ListAccordionLoading key={index} />;
            })}
      </DndContext>
    </div>
  );
};

export default List;
