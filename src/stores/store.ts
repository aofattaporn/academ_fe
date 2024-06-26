import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import projectSlice from "./projectSlice/projectSlice";
import tastsDetailsSlice from "./projectSlice/tastsDetailsSlice";
import allTasksSlice from "./tasksSlice/allTasksSlice";
import modalSlice from "./modalSlice/modalSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    modal: modalSlice,
    projects: projectSlice,
    user: userSlice,
    tasksDetails: tastsDetailsSlice,
    allTasks: allTasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
