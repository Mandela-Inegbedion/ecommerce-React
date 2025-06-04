import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
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
      <header className="navbar">
        <div className="navbar-brand">
          <img src="/favicon.png" alt="favicon" className="logo" />
          <h1 className="brand-name">Furniro</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="icons">
          <i className="fa-regular fa-user icon"></i>
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <i className="fa-regular fa-heart icon"></i>
          <i className="fa-solid fa-cart-shopping icon"></i>
        </div>
      </header>

      <br />
      <br />
      <br />
      <br />

      {/* Product Grid */}
       <h1 className="shop-title">Our Furniture</h1>
      <p className="shop-subtitle">Browse our stylish and modern furniture collection.</p>

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
      <footer className="footer">
        <div className="footer-section1 about">
          <h2>Funiro.</h2>
          <p className="para">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        <div className="footer-section links">
          <p className="section-title">Links</p>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div className="footer-section help">
          <p className="section-title">Help</p>
          <p>Payment Options</p>
          <p>Returns</p>
          <p>Privacy Policies</p>
        </div>

        <div className="footer-section newsletter">
          <p className="section-title">Newsletter</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2025 funiro. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}


