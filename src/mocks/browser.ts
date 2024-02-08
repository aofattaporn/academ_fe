import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import { projectMock } from "./projectMock";

export const worker = setupWorker(...handlers);

worker.use(projectMock.getAllProjectSuccess);
