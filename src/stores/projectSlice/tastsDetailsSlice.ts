import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SLICE_KEY } from "../../types/GenericType";
import { Tasks } from "../../types/MyTasksType";

export interface TasksState {
  isSideBar: boolean;
  tasksSeletedId?: string;
  allTasksDetals: Record<string, Tasks | undefined>;
}

const initialState: TasksState = {
  isSideBar: false,
  allTasksDetals: {},
};

export const tastsDetailsSlice = createSlice({
  name: SLICE_KEY.TASKS_DETAILS,
  initialState,
  reducers: {
    openDetails: (state, action: PayloadAction<boolean>) => {
      state.isSideBar = action.payload;
      if (!action.payload) {
        state.tasksSeletedId = "";
      }
    },
    seletedId: (state, action: PayloadAction<string>) => {
      state.tasksSeletedId = action.payload;
    },
    openAndSeletedId: (
      state,
      action: PayloadAction<{ id: string; isOpen: boolean }>
    ) => {
      state.tasksSeletedId = action.payload.id;
      state.isSideBar = action.payload.isOpen;
    },
    saveTasksDetailsById: (
      state,
      action: PayloadAction<{ projectId: string; tasks: Tasks }>
    ) => {
      const { projectId, tasks } = action.payload;
      state.allTasksDetals[projectId] = tasks;
    },
  },
});

export const {
  openDetails,
  seletedId,
  openAndSeletedId,
  saveTasksDetailsById,
} = tastsDetailsSlice.actions;

export default tastsDetailsSlice.reducer;
