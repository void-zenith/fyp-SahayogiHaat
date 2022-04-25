import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import viewReducer from "../features/navbarView/viewSlice";
import footReducer from "../features/footerView/footSlice";
import authReducer from "../features/auth/authSlice";

const reducers = combineReducers({
  navview: viewReducer,
  footview: footReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navview", "footview"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
