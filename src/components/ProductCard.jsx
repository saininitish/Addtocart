import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import "./Product.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.name === product.name)
  );

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className="add" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
      <button
        className="remove"
        onClick={() => dispatch(removeFromCart(product))}
        disabled={!cartItem || cartItem.quantity === 0}
      >
        Remove from Cart
      </button>
      {cartItem && (
        <p className="quantity-info">Quantity in Cart: {cartItem.quantity}</p>
      )}
    </div>
  );
};

export default ProductCard;
