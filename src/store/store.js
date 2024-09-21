import { createStore } from 'redux';

// Initial state
const initialState = {
  cart: [],
};

// Actions
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.name !== action.payload.name),
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
