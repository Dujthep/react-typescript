import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";
import PostSlice from "../features/PostSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    post: PostSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch