import { createSlice } from "@reduxjs/toolkit";

type InitialState = { sideMenuBar: boolean };

const initialState: InitialState = { sideMenuBar: true };

const uiReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggle(state) {
      state.sideMenuBar = !state.sideMenuBar;
    },
  },
});

export const { toggle } = uiReducer.actions;

export default uiReducer.reducer;
