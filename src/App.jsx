import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";  
import "./App.css";  

const data = {
  data: [
    {
      name: "Cosmetics",
      productList: [
        { name: "Hair Oil", price: 122 },
        { name: "Face Wash", price: 125 },
      ],
    },
    {
      name: "Household",
      productList: [
        { name: "Dish Soap", price: 80 },
        { name: "Laundry Detergent", price: 150 },
      ],
    },
  ],
};

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    console.log("Product Added to the cart");
    console.log("List of products present in cart:", [...cart, product]);
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    console.log("Product removed from the cart");
    console.log(
      "List of products present in cart:",
      cart.filter((item) => item.name !== product.name)
    );
  };

  return (
    <div className="App">
      {data.data.map((category) => (
        <div key={category.name} className="category">
          <h2>{category.name}</h2>
          <div className="product-list">
            {category.productList.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
