import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SLICE_KEY } from "../../types/GenericType";
import { ReactNode } from "react";

export interface ModalState {
  isOpen: boolean;
  children?: ReactNode;
  title?: string;
}

const initialState: ModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: SLICE_KEY.MODAL,
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ children: ReactNode; title: string }>
    ) => {
      state.isOpen = true;
      state.children = action.payload.children;
      state.title = action.payload.title;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
