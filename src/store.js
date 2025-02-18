import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Components/Slices/CartSlice'
import { WishlistSlice } from './Components/Slices/WishlistSlice'

export default configureStore({
  reducer: {
    cartItemManager: CartSlice.reducer,
    wishlistManager: WishlistSlice.reducer
  }
})