import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sign_in, sign_out, sign_up } from "./authAPI";

const initialState = {
  accesstoken: null,
  isLoggedIn: false,
  currentUser: null,
  isLoading: false,
  isToastDisplayed: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password);
    try {
      return await sign_in(email, password);
    } catch (error) {
      console.log(error, "login error");
      if (!error.response) throw error;
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ data }, { rejectWithValue }) => {
    try {
      console.log(data);
      return await sign_up(data);
    } catch (err) {
      console.log(err + "this is slice error catch");
      if (!err.response) throw err;
      return rejectWithValue(err);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.clear();
    return await sign_out();
  } catch (err) {
    if (!err.response) throw err;
    return err;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDisplayLoginToast: (state) => {
      state.isToastDisplayed = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isLoggedIn = true;
        state.isToastDisplayed = false;
        state.currentUser = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.currentUser = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isToastDisplayed = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isToastDisplayed = true;
        state.currentUser = null;
        state.accesstoken = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const { setDisplayLoginToast } = authSlice.actions;
export default authSlice.reducer;
