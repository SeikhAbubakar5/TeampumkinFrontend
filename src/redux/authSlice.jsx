import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(localStorage.getItem("ChatApp")) || null;

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("ChatApp", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("ChatApp");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


