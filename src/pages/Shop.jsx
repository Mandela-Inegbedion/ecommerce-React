import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/ProductCard.css";
import "../styles/Shop.css";

export default function Shop() {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((res) => res.json())
      .then((data) => setFurniture(data.products))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  return (
    <div className="shop-container">
      {/* Navbar */}
      <NavBar />

      <br />
      <br />
      <br />
      <br />

      {/* Product Grid */}
      <h1 className="shop-title">Our Furniture</h1>
      <p className="shop-subtitle">
        Browse our stylish and modern furniture collection.
      </p>

      <div className="product-grid">
        {furniture.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>

      <hr className="line" />

      {/* Footer */}
      <Footer />
    </div>
  );
}
