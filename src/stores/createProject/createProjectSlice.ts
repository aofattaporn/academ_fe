import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  step: number;
  currentStep: number;
  projectName: string;
}

const initialState: CounterState = {
  step: 0,
  currentStep: 0,
  projectName: "",
};

export const createProjectSlice = createSlice({
  name: "createProject",
  initialState,
  reducers: {
    increment: (state) => {
      state.step += 1;
      state.currentStep += 1;
    },
    selectStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const { increment, selectStep, setProjectName, reset } =
  createProjectSlice.actions;

export default createProjectSlice.reducer;
