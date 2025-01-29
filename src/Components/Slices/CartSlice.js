import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartItemManager',
  initialState: {
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    productDetail: JSON.parse(localStorage.getItem('details'))
  },
  reducers: {
    addToCart: (state, actions) => {
      let findItem = state.cartItems.findIndex((item)=> item.id === actions.payload.id);

      if(findItem === -1){
        state.cartItems.push(actions.payload)
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }else{
        state.cartItems[findItem].qty += 1;
      } 
    },
    deleteItem: (state, actions)=> {
      state.cartItems.splice(actions.payload,1)
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    increment: (state, actions) => {
      state.cartItems[actions.payload].qty += 1
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

   
    decrement: (state, actions) => {
      if(state.cartItems[actions.payload].qty > 1){
        state.cartItems[actions.payload].qty -= 1
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      }
    },

    clearCart: (state)=>{
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    productDetails: (state, actions) => {
      state.productDetail = [actions.payload]
      localStorage.setItem('details', JSON.stringify(state.productDetail));
    }
   
  }
})

export const { addToCart, deleteItem, productDetails, increment, decrement, clearCart} = CartSlice.actions

export default CartSlice.reducer