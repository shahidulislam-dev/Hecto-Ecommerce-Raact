import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Components/Slices/CartSlice'

export default configureStore({
  reducer: {
    cartItemManager: CartSlice.reducer
  }
})