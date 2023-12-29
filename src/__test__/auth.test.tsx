// sum.test.js
import { QueryClient, QueryClientProvider } from "react-query";
import useSignInForm from "../hooks/useSignInForm";
import { SignInSchema } from "../types/AuthType";
import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { ReactNode } from "react";
import { server } from "../mocks/server";
import authMock from "../mocks/authMock";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("auth component", () => {
  describe("sign-in component", () => {
    const form: SignInSchema = {
      email: "email@example.com",
      password: "12345678",
    };

    it("sig-in success", async () => {
      // Given
      server.use(authMock.signIn_success);
      const { result } = renderHook(() => useSignInForm(), { wrapper });
      const { onSubmit } = result.current;

      // When
      await act(() => {
        onSubmit(form);
      });

      // Then
      const { mutation } = result.current;
      expect(mutation.isSuccess).toEqual(true);
    });

    it("sig-in failed", async () => {
      // Given
      const { result } = renderHook(() => useSignInForm(), { wrapper });
      const { onSubmit } = result.current;
      server.use(authMock.signIn_failed_internal_error);

      // When
      await act(() => {
        onSubmit(form);
      });

      // Then
      const { mutation } = result.current;
      expect(mutation.isError).toEqual(true);
    });
  });
});
