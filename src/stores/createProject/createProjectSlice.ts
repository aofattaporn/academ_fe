import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isOpen: boolean;
  step: number;
  currentStep: number;
  projectName: string;
}

const initialState: CounterState = {
  isOpen: false,
  step: 1,
  currentStep: 1,
  projectName: "",
};

export const createProjectSlice = createSlice({
  name: "createProject",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.step > state.currentStep) {
        state.currentStep += 1;
      } else {
        state.step += 1;
        state.currentStep += 1;
      }
    },
    selectStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
    reset: () => initialState,
    openModal: (state) => {
      state.isOpen = true;
    },
  },
});

export const { increment, selectStep, setProjectName, reset, openModal } =
  createProjectSlice.actions;

export default createProjectSlice.reducer;
