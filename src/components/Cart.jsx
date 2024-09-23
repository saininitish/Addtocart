import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import { selectCartTotal } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector(selectCartTotal); // Get the total value

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>
                  {item.name} - Quantity: {item.quantity}
                </span>
                <span>Total: ${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total Cart Value: ${cartTotal.toFixed(2)}</h3>{" "}
            {/* Display total */}
          </div>
        </>
      ) : (
        <p className="cart-empty">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
