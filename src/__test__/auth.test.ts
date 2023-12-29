// sum.test.js
import useSignInForm from "../hooks/useSignInForm";
import { SignInSchema } from "../types/AuthType";
import { renderHook, act } from "@testing-library/react-hooks";

describe("auth component", () => {
  describe("sign-in component", () => {
    const form: SignInSchema = {
      email: "email@example.com",
      password: "12345678",
    };

    it("sig-in success", async () => {
      // Given
      const { result } = renderHook(() => useSignInForm());
      const { onSubmit } = result.current;

      // When
      act(() => {
        onSubmit(form);
      });

      // Then
      const { mutation } = result.current;
      expect(mutation.isSuccess).toEqual(true);
    });
  });
});
