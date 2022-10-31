import { configureStore } from "@reduxjs/toolkit"
import loadingSlice from "./loadingSlice"
import modalSlice from "./modalSlice"

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    modal: modalSlice
  }
})