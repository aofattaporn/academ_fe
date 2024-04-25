import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";
import { SLICE_KEY } from "../../types/GenericType";

export interface UserState {
  user: UserType;
}

const initialState: UserState = {
  user: {
    email: "",
    fullName: "",
    avatarColor: "",
  },
};

export const userSlice = createSlice({
  name: SLICE_KEY.USER,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
