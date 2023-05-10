import { createSlice } from "@reduxjs/toolkit";


// Creating initial state obj

const initialState = {
  notification: {
    show: false,
    type: "",
    message: "",
  },
};

// Creating a slice - which holds related states and function(actions) for manipulation that state

// createSlice Arguments
//  1 - name ---- any string
//  2 - initial state object
//  3 - reducers - actions are made in this object

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = action.payload;
      console.log(action.payload);
    },
  },
});

export const { showNotification } =
  uiSlice.actions;
export default uiSlice.reducer;
