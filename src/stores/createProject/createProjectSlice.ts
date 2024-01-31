import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InviteProjectType } from "../../types/ProjectType";

export interface ProjectCreationState {
  isModalOpen: boolean;
  totalSteps: number;
  currentStep: number;
  avatarColor: string;
  projectName: string;
  selectedViews: string[];
  invitedUsers: InviteProjectType[];
}

const initialState: ProjectCreationState = {
  isModalOpen: false,
  avatarColor: "#AF8AE2",
  totalSteps: 4,
  currentStep: 0,
  projectName: "",
  selectedViews: [],
  invitedUsers: [],
};

export const projectCreationSlice = createSlice({
  name: "projectCreation",
  initialState,
  reducers: {
    incrementStep: (state) => {
      if (state.currentStep < state.totalSteps) {
        state.currentStep += 1;
      }
    },
    resetState: () => initialState,
    selectAvatarColor: (state, action: PayloadAction<string>) => {
      state.avatarColor = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setProjectName: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload;
    },
    openModal: (state) => {
      state.isModalOpen = true;
    },
    addSelectedView: (state, action: PayloadAction<string>) => {
      state.selectedViews.push(action.payload);
    },
    removeSelectedView: (state, action: PayloadAction<string>) => {
      const index = state.selectedViews.indexOf(action.payload);
      if (index !== -1) {
        state.selectedViews.splice(index, 1);
      }
    },
    selectAllViews: (state) => {
      state.selectedViews = ["List", "Board", "Calendar", "TimeLine", "Note"];
    },
    addInvitedUser: (state, action: PayloadAction<InviteProjectType>) => {
      state.invitedUsers.push(action.payload);
    },
    removeInvitedUser: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index !== -1 && index < state.invitedUsers.length) {
        state.invitedUsers.splice(index, 1);
      }
    },
  },
});

export const {
  incrementStep,
  setCurrentStep,
  setProjectName,
  selectAvatarColor,
  resetState,
  openModal,
  addSelectedView,
  removeSelectedView,
  selectAllViews,
  addInvitedUser,
  removeInvitedUser,
} = projectCreationSlice.actions;

export default projectCreationSlice.reducer;
