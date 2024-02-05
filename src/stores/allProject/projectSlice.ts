import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProjectList } from "../../types/ProjectType";

export interface ProjectsState {
  projects: ProjectList[];
}

const initialState: ProjectsState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    saveProjects: (state, action: PayloadAction<ProjectList[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { saveProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
