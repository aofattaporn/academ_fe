import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import projectSlice from "./projectSlice/projectSlice";
import tastsDetailsSlice from "./projectSlice/tastsDetailsSlice";

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    user: userSlice,
    tasksDetails: tastsDetailsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
