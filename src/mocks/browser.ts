import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import authMock from "./authMock";

export const worker = setupWorker(...handlers);

worker.use(authMock.signUp_failed_internal_error);
