import { configureStore } from "@reduxjs/toolkit"
import loadingSlice from "./loadingSlice"
import tabSlice from "./tabSlice"

export const store = configureStore({
  reducer: {
    tab: tabSlice,
    loading: loadingSlice
  }
})