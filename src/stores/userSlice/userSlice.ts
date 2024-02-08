import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";

export interface UserState {
  user: UserType;
}

const initialState: UserState = {
  user: {
    email: "",
    fullName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;
