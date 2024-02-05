import { configureStore } from "@reduxjs/toolkit";
import createProjectSlice from "./createProject/createProjectSlice";
import userSlice from "./user/userSlice";
import projectSlice from "./allProject/projectSlice";

export const store = configureStore({
  reducer: {
    createProject: createProjectSlice,
    projects: projectSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
