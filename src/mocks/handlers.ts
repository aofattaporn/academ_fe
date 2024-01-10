import { authMock } from "./authMock";
import setup from "./setUpWorker";

// ingeneral case handler
export const handlers = [
  setup.unhandledRequestSVGHandler,
  setup.unhandledRequesPNGtHandler,
  setup.unhandledPostRequestHandler,

  authMock.signIn_success,
  authMock.signUp_success,
  authMock.signIn_success,
  authMock.signIn_google_success,
];
