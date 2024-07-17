import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./authSlice";
import { Store } from "@reduxjs/toolkit";

const store: Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
