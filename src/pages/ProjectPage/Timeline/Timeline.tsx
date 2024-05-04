import FullCalendar from "@fullcalendar/react";
import { Alert, Button } from "@mui/material";
import moment from "moment";
import { useState, useEffect } from "react";
import useAllTasks from "../../../hooks/tasksHook/useAllTasks";
import useTasksHandle from "../../../hooks/tasksHook/useTasksHandler";
import {
  openAndSeletedId,
  openDetails,
} from "../../../stores/projectSlice/tastsDetailsSlice";
import { Tasks } from "../../../types/MyTasksType";
import CreateTasksByDate from "../Calendar/CreateTasksByDate/CreateTasksByDate";
import { useProjectPermission } from "../ProjectPage";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import { ResourceInput } from "@fullcalendar/resource/index.js";
import { Process } from "../../../types/ProjectType";
import {
  EventClickArg,
  EventContentArg,
  EventSourceInput,
} from "@fullcalendar/core";

const Timeline = () => {
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

  const convertProcesResouce = (processes: Process[]): ResourceInput[] => {
    const processEvents: ResourceInput[] = processes.map((process) => ({
      id: process.processId,
      process: process.processName,
      resourceId: process.processName,
      title: " ",
    }));

    return processEvents;
  };

  const convertToEventDate = (allTasks: Tasks[]): EventSourceInput => {
    const taskEvents: EventSourceInput = allTasks.map((task) => ({
      id: task.tasksId,
      resourceId: task.processId,
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
      <h1 className="text-2xl font-bold">Timeline</h1>
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
      {allTaksData && allTaksIsSuccesss && process ? (
        <div>
          <FullCalendar
            plugins={[resourceTimelinePlugin]}
            initialView="resourceTimelineMonth"
            eventContent={DateItemX}
            customButtons={{
              addTasksButton: {
                text: "Add Task",
                click: () => setIsOpen(true),
              },
            }}
            headerToolbar={{
              left: "today prev,next",
              center: "title",
              right: `${
                taskPermission?.addNew ? "addTasksButton " : ""
              }resourceTimelineTenDay,resourceTimelineMonth,resourceTimelineYear`,
            }}
            views={{
              resourceTimelineTenDay: {
                type: "resourceTimeline",
                duration: { days: 10 },
                buttonText: "10 days",
              },
            }}
            aspectRatio={1.2}
            editable={true}
            resourceGroupField="process"
            resources={convertProcesResouce(process)}
            events={convertToEventDate(allTaksData)}
            eventClick={(arg: EventClickArg) => {
              dispatch(openAndSeletedId({ id: arg.event.id, isOpen: true }));
              const calendar = arg.view.calendar;
              calendar.updateSize();
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

const DateItemX = (eventInfo: EventContentArg) => {
  return (
    <div className="flex h-9 items-center">
      <div
        style={{
          backgroundColor: eventInfo.backgroundColor,
          color: eventInfo.backgroundColor,
          width: "1rem",
        }}
        className="bg-black h-full rounded-s "
      >
        xxx
      </div>
      <div className="h-9 font-bold  text-dark shadow-md border-none w-full flex items-center my-1 bg-white hover:cursor-pointer">
        <i className="px-2">{eventInfo.event.title}</i>
      </div>
    </div>
  );
};

export default Timeline;
