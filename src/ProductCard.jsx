import React from "react";

const ProductCard = ({ product, onAdd, onRemove }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className="add-button" onClick={() => onAdd(product)}>
        Add to Cart
      </button>
      <button className="remove-button" onClick={() => onRemove(product)}>
        Remove from Cart
      </button>
    </div>
  );
};

export default ProductCard;
