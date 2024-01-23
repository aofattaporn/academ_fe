import { configureStore } from "@reduxjs/toolkit";
import createProjectSlice from "./createProject/createProjectSlice";

export const store = configureStore({
  reducer: {
    createProject: createProjectSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
