// sum.test.js
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { ReactNode } from "react";
import useSignUpForm from "../../hooks/useSignUpForm";
import authMock from "../../mocks/authMock";
import { server } from "../../mocks/server";
import { SignUpSchema } from "../../types/AuthType";
import { AuthProvider } from "../../layouts/AuthProvider";
import { deleteUser, getAuth } from "firebase/auth";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </AuthProvider>
);

describe("auth component", () => {
  describe("useSignUpForm", () => {
    const form: SignUpSchema = {
      fullName: "exampleName",
      email: "email@example.com",
      password: "12345678",
    };

    it("onSubmit: sign-up success", async () => {
      // Given
      server.use(authMock.signInSuccess);
      const { result, waitFor } = await renderHook(() => useSignUpForm(), {
        wrapper,
      });
      const { onSubmit } = result.current;

      // When
      await act(async () => {
        await onSubmit(form);
        await waitFor(() => result.current.mutation.isSuccess, {
          timeout: 5000,
        });
      });

      // Then
      const { mutation } = result.current;
      console.log(mutation.error);
      expect(mutation.isSuccess).toEqual(true);

      // Then
      const auth = getAuth();
      if (auth.currentUser) {
        await deleteUser(auth.currentUser);
      }
    });
  });
});
