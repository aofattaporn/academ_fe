import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { server } from "../../mocks/server";
import { projectMock } from "../../mocks/projectMock";
import { act, renderHook, waitFor } from "@testing-library/react";
import useAllMyProjects from "../../hooks/projectHook/useAllMyProjects";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../../stores/store";
import { AuthProvider } from "../../layouts/AuthProvider";
import useCreateProject from "../../hooks/projectHook/useCreateProject";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>{children}</Provider>
    </QueryClientProvider>
  </AuthProvider>
);

describe("projects", () => {
  describe("useProjectsList", () => {
    it("query: get all my project success ", async () => {
      // Given
      server.use(projectMock.getAllProjectSuccess);
      const { result } = await renderHook(() => useAllMyProjects(), {
        wrapper,
      });

      waitFor(() => expect(result.current.projectIsSuccess).toEqual(true));
    });

    it("query: get all my project error ", async () => {
      // Given
      server.use(projectMock.getAllProjectError);
      const { result } = await renderHook(() => useAllMyProjects(), {
        wrapper,
      });

      waitFor(() => expect(result.current.projectIsError).toEqual(true));
    });
  });

  describe("useCreateProject", () => {
    const handleClose = () => {};

    it("create: project success ", async () => {
      // Given
      server.use(projectMock.createProjectSuccess);
      const { result } = await renderHook(
        () => useCreateProject({ handleClose }),
        {
          wrapper,
        }
      );

      // Then:
      waitFor(() => expect(result.current.mutation.isSuccess).toEqual(true));
    });

    it("create: project failed ", async () => {
      // Given
      server.use(projectMock.createProjectError);
      const { result } = await renderHook(
        () => useCreateProject({ handleClose }),
        {
          wrapper,
        }
      );

      // Then:
      waitFor(() => expect(result.current.mutation.isError).toEqual(false));
    });
  });
});
