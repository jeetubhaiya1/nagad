import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

type InitialState = { isAuth: boolean };

const initialState: InitialState = { isAuth: false };

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;
