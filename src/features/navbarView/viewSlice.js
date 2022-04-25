import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSearchBar: false,
};

const viewSlice = createSlice({
  name: "navview",
  initialState,
  reducers: {
    showSearchBar: (state) => {
      state.showSearchBar = true;
    },
    showNavBar: (state) => {
      state.showSearchBar = false;
    },
  },
});

export const { showSearchBar, showNavBar } = viewSlice.actions;

export default viewSlice.reducer;
