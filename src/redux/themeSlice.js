import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "Card",
  initialState: {
    theme: "light",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
