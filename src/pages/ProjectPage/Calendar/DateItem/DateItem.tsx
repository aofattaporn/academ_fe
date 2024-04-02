import { EventContentArg } from "@fullcalendar/core/index.js";

const DateItem = (eventInfo: EventContentArg) => {
  return (
    <div className="h-9 font-bold  text-dark shadow-md rounded-md border-none w-full flex items-center my-1 bg-white">
      <div
        style={{ backgroundColor: eventInfo.backgroundColor }}
        className="w-4 h-full rounded-s-md"
      ></div>
      <i className="px-4 ">{eventInfo.event.title}</i>
    </div>
  );
};
export default DateItem;
