import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InviteProjectType } from "../../types/ProjectType";

export interface CounterState {
  isOpen: boolean;
  step: number;
  colorAvatar: string;
  maxStep: number;
  currentStep: number;
  projectName: string;
  views: string[];
  invites: InviteProjectType[];
}

const initialState: CounterState = {
  isOpen: false,
  colorAvatar: "#AF8AE2",
  step: 0,
  maxStep: 4,
  currentStep: 0,
  projectName: "",
  views: [],
  invites: [],
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
    reset: () => initialState,
    selectColor: (state, action: PayloadAction<string>) => {
      state.colorAvatar = action.payload;
    },
    selectStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
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
    addInviteProject: (state, action: PayloadAction<InviteProjectType>) => {
      state.invites.push(action.payload);
    },
    removeInviteProject: (state, action: PayloadAction<number>) => {
      console.log(action.payload);
      if (action.payload !== -1) {
        state.invites.splice(action.payload, 1);
      }
    },
  },
});

export const {
  increment,
  selectStep,
  setProjectName,
  selectColor,
  reset,
  openCreateProjectModal,
  addViews,
  removeViews,
  selectAllViews,
  addInviteProject,
  removeInviteProject,
} = createProjectSlice.actions;

export default createProjectSlice.reducer;
