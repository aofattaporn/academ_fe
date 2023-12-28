import { authMock } from "./authMock";

// ingeneral case handler
export const handlers = [
  authMock.signIn_success,
  authMock.signIn_failed_internal_error,
  authMock.signIn_failed_form_incrrect,
  authMock.signUp_success,
  authMock.signUp_failed_email_existing,
  authMock.signUp_failed_internal_error,
];
