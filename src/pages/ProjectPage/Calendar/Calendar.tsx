import { DndContext } from "@dnd-kit/core";
import { Alert, Button } from "@mui/material";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

const Calendar = () => {
  const {
    allTaksIsError,
    allTasksError,
    mutation,
    handleDragStart,
    handleDragEnd,
    navigate,
  } = useAllTasks();

  const events = [
    {
      title: "Meeting",
      start: "2024-04-03",
      end: "2024-04-03",
    },
    { title: "Event 2", start: "2024-04-01", end: "2024-04-03" },
  ];

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
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          eventContent={renderEventContent}
          events={events}
        />
      </DndContext>
    </div>
  );
};

function renderEventContent(eventInfo: any) {
  return (
    <div className="bg-red h-9 font-bold p-1">
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}

export default Calendar;
