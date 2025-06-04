import React from "react";

export default function ProductCard({ image, name, desc, price, oldPrice, badge }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />

      {badge && <span className="product-badge">{badge}</span>}

      <div className="card-overlay">
        <button>Add to cart</button>
        <div className="overlay-actions">
          <span>⤤ Share</span>
          <span>⥃ Compare</span>
          <span>♡ Like</span>
        </div>
      </div>

      <div className="product-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <div className="price-row">
          <span className="price">{price}</span>
          {oldPrice && <span className="old-price">{oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}
