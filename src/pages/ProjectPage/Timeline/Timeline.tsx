import FullCalendar from "@fullcalendar/react";
import { Alert, Button } from "@mui/material";
import moment from "moment";
import { useState, useEffect } from "react";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import useTasksHandle from "../../../hooks/tasksHook/useTasksHandler";
import { openDetails } from "../../../stores/projectSlice/tastsDetailsSlice";
import { Tasks } from "../../../types/MyTasksType";
import CreateTasksByDate from "../Calendar/CreateTasksByDate/CreateTasksByDate";
import DateItem from "../Calendar/DateItem/DateItem";
import { useProjectPermission } from "../ProjectPage";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";

const Timeline = () => {
  const { process } = useProjectPermission();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    allTaksData,
    allTaksIsError,
    allTaksIsSuccesss,
    allTasksError,
    mutation,
    navigate,
  } = useAllTasks();

  const { dispatch, tasksDetails } = useTasksHandle();

  const convertToEventDate = (allTasks: Tasks[]): ResourceSourceInput => {
    const taskEvents: ResourceSourceInput = allTasks.map((task) => ({
      id: task.tasksId,
      backgroundColor:
        process?.find((item) => item.processId === task.processId)
          ?.processColor || "defaultColor",
      title: task.tasksName,
      start: moment(task.startDate).format("YYYY-MM-DD"),
      end: moment(task.dueDate).format("YYYY-MM-DD"),
      mutate: () => dispatch(openDetails(true)),
    }));

    return taskEvents;
  };

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 600);
  }, [tasksDetails.isSideBar]);

  return (
    <div className="p-6 text-dark font-roboto">
      <h1 className="text-2xl font-bold">Time</h1>
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
      {allTaksData && allTaksIsSuccesss ? (
        <div>
          <FullCalendar
            plugins={[resourceTimelinePlugin]}
            initialView="resourceTimelineMonth"
            eventContent={DateItem}
            resources={[]}
            events={convertToEventDate(allTaksData)}
            customButtons={{
              myCustomButton: {
                text: "Add Item",
                click: () => setIsOpen(true),
              },
            }}
            headerToolbar={{
              left: "title",
              end: "myCustomButton today prev,next",
            }}
            // eventClick={(arg: EventClickArg) => {
            //   dispatch(openAndSeletedId({ id: arg.event.id, isOpen: true }));
            //   const calendar = arg.view.calendar;
            //   calendar.updateSize();
            // }}
          />
          {isOpen ? (
            <CreateTasksByDate handleClose={() => setIsOpen(false)} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Timeline;
