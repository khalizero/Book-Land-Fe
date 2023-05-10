import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth-slice";
import uiSlice from "./reducers/ui-slice";

// This confgiureStore comes from redux toolkit for setting up all our reducers into single store
const store = configureStore({
  reducer: {
    auth: authSlice,
    ui: uiSlice,
  },
});

export default store;
