import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SLICE_KEY } from "../../types/GenericType";
import { Tasks } from "../../types/MyTasksType";

export interface AllTasksState {
  allTasks?: Tasks[];
}

const initialState: AllTasksState = {};

export const allTasksSlice = createSlice({
  name: SLICE_KEY.ALL_TASKS,
  initialState,
  reducers: {
    saveAllTasks: (state, action: PayloadAction<Tasks[]>) => {
      state.allTasks = action.payload;
    },
  },
});

export const { saveAllTasks } = allTasksSlice.actions;

export default allTasksSlice.reducer;
