import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartItemManager',
  initialState: {
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cartItems.push(actions.payload)
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
   
  }
})

export const { addToCart} = CartSlice.actions

export default CartSlice.reducer