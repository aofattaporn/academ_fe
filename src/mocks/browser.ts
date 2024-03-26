import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
// import { tasksMock } from "./tasksMock";

export const worker = setupWorker(...handlers);

// worker.use(tasksMock.updateTasksByTasksIdFailedNotFoudId);
