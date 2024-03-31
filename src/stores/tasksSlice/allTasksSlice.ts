import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SLICE_KEY } from "../../types/GenericType";
import { Tasks } from "../../types/MyTasksType";

export interface AllTasksState {
  allTasks: Record<string, Tasks[] | undefined>;
}

const initialState: AllTasksState = {
  allTasks: {}, // Initialize allTasks as an empty object
};
export const allTasksSlice = createSlice({
  name: SLICE_KEY.ALL_TASKS,
  initialState,
  reducers: {
    saveAllTasks: (
      state,
      action: PayloadAction<{ projectId: string; tasks: Tasks[] }>
    ) => {
      const { projectId, tasks } = action.payload;
      state.allTasks[projectId] = tasks;
    },
  },
});

export const { saveAllTasks } = allTasksSlice.actions;

export default allTasksSlice.reducer;
