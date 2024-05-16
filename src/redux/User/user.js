import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user :{}
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      const data = action.payload;
      // console.dir(data);
      state.user =data;
    },
    signOutUser: (state, action) => {
      state.user = { name: "unknown", email: "email@email" };
    },
  },
});

export const { setCurrentUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;
