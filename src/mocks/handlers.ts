import { authMock } from "./authMock";

export const handlers = [
  authMock.signIn_success,
  authMock.signIn_failed_form_invalid,
  authMock.signIn_failed_somthing_when_wrong,
];
