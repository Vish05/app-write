import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: '', // for user object
  },
  reducers: {
    login: (state, action) => {
        state.userId = action.payload.$id;
    },
    logout: (state) => {
        state.userId = ''
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;