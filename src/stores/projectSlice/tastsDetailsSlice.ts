import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SLICE_KEY } from "../../types/GenericType";

export interface TasksState {
  isSideBar: boolean;
  tasksSeletedId?: string;
}

const initialState: TasksState = {
  isSideBar: false,
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
  },
});

export const { openDetails, seletedId } = tastsDetailsSlice.actions;

export default tastsDetailsSlice.reducer;
