import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modalState: false,
  modalName: null,
  modalImage: null
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalState = true
      state.modalName = action.payload.modalName
      state.modalImage = action.payload.modalImage
    },
    closeModal: (state) => {
      state.modalState = false
      state.modalName = null
      state.modalImage = null
    }
  }
})

export const {openModal, closeModal} = modalSlice.actions

export default modalSlice.reducer