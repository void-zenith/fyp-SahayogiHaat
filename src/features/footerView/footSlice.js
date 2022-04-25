import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showShortFooterBar: false,
};

const footSlice = createSlice({
  name: "footview",
  initialState,
  reducers: {
    showShortFooter: (state) => {
      state.showShortFooterBar = true;
    },
    showDefaultFooter: (state) => {
      state.showShortFooterBar = false;
    },
  },
});

export const { showShortFooter, showDefaultFooter } = footSlice.actions;

export default footSlice.reducer;
