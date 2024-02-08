import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ListProject } from "../../types/ProjectType";

export interface ProjectsState {
  projects: ListProject[];
}

const initialState: ProjectsState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    saveProjects: (state, action: PayloadAction<ListProject[]>) => {
      state.projects = action.payload;
    },
  },
});

export const { saveProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
