import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isOpen: boolean;
  step: number;
  maxStep: number;
  currentStep: number;
  projectName: string;
  views: string[];
}

const initialState: CounterState = {
  isOpen: false,
  step: 0,
  maxStep: 4,
  currentStep: 0,
  projectName: "",
  views: [],
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
    openCreateProjectModal: (state) => {
      state.isOpen = true;
    },
    addViews: (state, action: PayloadAction<string>) => {
      state.views.push(action.payload);
    },
    removeViews: (state, action: PayloadAction<string>) => {
      const index = state.views.indexOf(action.payload);
      if (index !== -1) {
        state.views.splice(index, 1);
      }
    },

    selectAllViews: (state) => {
      state.views = ["List", "Board", "Calendar", "TimeLine", "Note"];
    },
  },
});

export const {
  increment,
  selectStep,
  setProjectName,
  reset,
  openCreateProjectModal,
  addViews,
  removeViews,
  selectAllViews,
} = createProjectSlice.actions;

export default createProjectSlice.reducer;
