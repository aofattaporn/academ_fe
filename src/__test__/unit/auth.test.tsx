// sum.test.js
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook, act } from "@testing-library/react-hooks";
import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { ReactNode } from "react";
import useSignInForm from "../../hooks/useSignInForm";
import useSignUpForm from "../../hooks/useSignUpForm";
import authMock from "../../mocks/authMock";
import { server } from "../../mocks/server";
import { SignInSchema, SignUpSchema } from "../../types/AuthType";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("auth component", () => {
  describe("useSignInForm", () => {
    const form: SignInSchema = {
      email: "email@example.com",
      password: "12345678",
    };

    it("onSubmit: sign-in success", async () => {
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

    it("onSubmit: sign-in failed", async () => {
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

  describe("useSignUpForm", () => {
    const form: SignUpSchema = {
      fullName: "exampleName",
      email: "email@example.com",
      password: "12345678",
    };

    it("onSubmit: sign-up success", async () => {
      // Given
      server.use(authMock.signUp_success);
      const { result } = renderHook(() => useSignUpForm(), { wrapper });
      const { onSubmit } = result.current;

      // When
      await act(() => {
        onSubmit(form);
      });

      // Then
      const { mutation } = result.current;
      expect(mutation.isSuccess).toEqual(true);
    });

    it("onSubmit: sign-up failed", async () => {
      // Given
      server.use(authMock.signUp_failed_internal_error);
      const { result } = renderHook(() => useSignUpForm(), { wrapper });
      const { onSubmit } = result.current;

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
