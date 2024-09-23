import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

function Product({ name, price }) {
  const dispatch = useDispatch();

  return (
    <div className="product">
      <p>Name: {name}</p>
      <p>Price: ${price}</p>
      <button onClick={() => dispatch(addToCart(name))}>Add to Cart</button>
      <button onClick={() => dispatch(removeFromCart(name))}>
        Remove from Cart
      </button>
    </div>
  );
}

export default Product;
