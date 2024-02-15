import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ListProject } from "../../types/ProjectType";

export interface ProjectsState {
  projects: ListProject[];
  isLoading: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

const initialState: ProjectsState = {
  projects: [],
  isLoading: true,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    saveProjects: (state, action: PayloadAction<ListProject[]>) => {
      state.projects = action.payload;
    },
    saveOnLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    saveOnSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    saveOnError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { saveProjects, saveOnLoading, saveOnSuccess, saveOnError } =
  projectsSlice.actions;

export default projectsSlice.reducer;
