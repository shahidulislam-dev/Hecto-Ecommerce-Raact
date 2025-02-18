import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

export const WishlistSlice = createSlice({
    name: 'wishlistManager',
    initialState: {
        wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
    },
    reducers: {
        addToWishlist: (state, actions) => {
            let findItem = state.wishlist.findIndex((item) => item.id === actions.payload.id);
      
            if (findItem === -1) {
              state.wishlist.push(actions.payload)
              localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
              toast.success("Added To Wishlist",{autoClose:1000, position: "top-center"});
            } else {
              toast.error("Product Already In Wishlist",{autoClose:1000, position: "top-center"});
            }
          },
          deleteWishlistItem: (state, actions) => {
            state.wishlist.splice(actions.payload, 1)
            localStorage.setItem('cart', JSON.stringify(state.wishlist));
          },
          clearWishlist: (state) => {
            state.wishlist = [];
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
          },
    }
}) 
export const { addToWishlist, deleteWishlistItem, clearWishlist } = WishlistSlice.actions

export default WishlistSlice.reducer