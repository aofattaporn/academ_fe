import { Alert, Button } from "@mui/material";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { EventSourceInput } from "@fullcalendar/core/index.js";
import { Tasks } from "../../../types/MyTasksType";
import moment from "moment";
import { useProjectPermission } from "../ProjectPage";
import DateItem from "./DateItem/DateItem";

const Calendar = () => {
  const { process } = useProjectPermission();

  const {
    allTaksData,
    allTaksIsError,
    allTaksIsSuccesss,
    allTasksError,
    mutation,
    navigate,
  } = useAllTasks();

  const convertToEventDate = (allTasks: Tasks[]): EventSourceInput => {
    const taskEvents: EventSourceInput = allTasks.map((task) => ({
      id: task.tasksId,
      backgroundColor:
        process?.find((item) => item.processId === task.processId)
          ?.processColor || "defaultColor", // Use a default color if process is undefined or not found
      title: task.tasksName,
      start: moment(task.startDate).format("YYYY-MM-DD"),
      end: moment(task.dueDate).format("YYYY-MM-DD"),
    }));

    return taskEvents;
  };

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
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventContent={DateItem}
          events={convertToEventDate(allTaksData)}
        />
      ) : null}
    </div>
  );
};

export default Calendar;
