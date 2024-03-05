import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import projectSlice from "./projectSlice/projectSlice";

export const store = configureStore({
  reducer: {
    projects: projectSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
