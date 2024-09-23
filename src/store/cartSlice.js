 
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(item => item.name === product.name);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      console.log('Product Added to the cart');
      console.log('Current Cart:', state.cartItems);
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(item => item.name === product.name);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(item => item.name !== product.name);
      }
      console.log('Product removed from the cart');
      console.log('Current Cart:', state.cartItems);
    },
  },
});

// Selector to calculate the total value of the cart
export const selectCartTotal = (state) => {
  return state.cart.cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
