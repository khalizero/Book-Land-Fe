import { createSlice } from "@reduxjs/toolkit";

// Creating initial state obj
const initialState = {
  isLoggedIn: localStorage.getItem('token') ? true : false,
};

// Creating a slice - which holds related states and function(actions) for manipulation that state

// createSlice Arguments
//  1 - name ---- any string
//  2 - initial state object
//  3 - reducers - actions are made in this object

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    setLoggedIn(state,action){
      state.isLoggedIn = action.payload
    }
  }
});
export const {setLoggedIn} = authSlice.actions
export default authSlice.reducer;
