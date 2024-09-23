import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const ProductList = ({ category }) => {
  return (
    <div className="category-section">
      <h2>{category.name}</h2>
      <div className="product-list">
        {category.productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
