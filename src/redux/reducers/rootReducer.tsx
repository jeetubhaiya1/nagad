import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer.tsx";
import uiReducer from "./uiReducer.tsx";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
