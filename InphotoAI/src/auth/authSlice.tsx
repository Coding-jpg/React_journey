// src/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userName: string | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userName: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<string>) {
      state.isLoggedIn = true;
      state.userName = action.payload;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.userName = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
