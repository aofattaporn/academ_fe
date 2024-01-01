import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";
import authMock from "./authMock";

export const worker = setupWorker(...handlers);

worker.use(authMock.signUp_failed_email_existing);
