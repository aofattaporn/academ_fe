import { Alert, Button } from "@mui/material";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { EventClickArg, EventSourceInput } from "@fullcalendar/core/index.js";
import { Tasks } from "../../../types/MyTasksType";
import moment from "moment";
import { useProjectPermission } from "../ProjectPage";
import DateItem from "./DateItem/DateItem";
import {
  openAndSeletedId,
  openDetails,
} from "../../../stores/projectSlice/tastsDetailsSlice";
import useTasksHandle from "../../../hooks/tasksHook/useTasksHandler";
import { useEffect, useState } from "react";
import CreateTasksByDate from "./CreateTasksByDate/CreateTasksByDate";

const Calendar = () => {
  const { process, taskPermission } = useProjectPermission();
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

  const convertToEventDate = (allTasks: Tasks[]): EventSourceInput => {
    const taskEvents: EventSourceInput = allTasks.map((task) => ({
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
      <h1 className="text-2xl font-bold">Calendar</h1>
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
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            eventContent={DateItem}
            events={convertToEventDate(allTaksData)}
            eventClick={(arg: EventClickArg) => {
              dispatch(openAndSeletedId({ id: arg.event.id, isOpen: true }));
              const calendar = arg.view.calendar;
              calendar.updateSize();
            }}
            customButtons={{
              addTasksButton: {
                text: "Add Task",
                click: () => setIsOpen(true),
              },
            }}
            headerToolbar={{
              left: "today prev,next",
              center: "title",
              right: taskPermission?.addNew ? "addTasksButton" : "",
            }}
          />
          {isOpen && taskPermission ? (
            <CreateTasksByDate
              handleClose={() => setIsOpen(false)}
              taskPermission={taskPermission}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Calendar;
