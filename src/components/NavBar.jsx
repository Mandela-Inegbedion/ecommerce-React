import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-brand">
          <img src="/favicon.png" alt="favicon" className="logo" />
          <h1 className="brand-name">Furniro</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Desktop Icons */}
        <div className="icons">
          <i className="fa-regular fa-user icon"></i>
          <i className="fa-solid fa-magnifying-glass icon"></i>
          <i className="fa-regular fa-heart icon"></i>
          <i className="fa-solid fa-cart-shopping icon"></i>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fa-solid ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}></div>
        )}

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
          <div className="mobile-menu-header">
            <div className="mobile-brand">
              <img src="/favicon.png" alt="favicon" className="mobile-logo" />
              <h2 className="mobile-brand-name">Furniro</h2>
            </div>
            <button className="mobile-menu-close" onClick={closeMenu}>
              <i className="fa-solid fa-times"></i>
            </button>
          </div>

          <nav className="mobile-nav-links">
            <Link to="/" onClick={closeMenu}>
              <i className="fa-solid fa-home"></i>
              Home
            </Link>
            <Link to="/shop" onClick={closeMenu}>
              <i className="fa-solid fa-shopping-bag"></i>
              Shop
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <i className="fa-solid fa-info-circle"></i>
              About
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              <i className="fa-solid fa-envelope"></i>
              Contact
            </Link>
          </nav>

          <div className="mobile-icons">
            <div className="mobile-icon-item" onClick={closeMenu}>
              <i className="fa-regular fa-user"></i>
              <span>Account</span>
            </div>
            <div className="mobile-icon-item" onClick={closeMenu}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </div>
            <div className="mobile-icon-item" onClick={closeMenu}>
              <i className="fa-regular fa-heart"></i>
              <span>Wishlist</span>
            </div>
            <div className="mobile-icon-item" onClick={closeMenu}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
