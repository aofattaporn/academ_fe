import { configureStore } from "@reduxjs/toolkit";
import createProjectSlice from "./createProject/createProjectSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    createProject: createProjectSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
