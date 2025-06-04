import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { FaBars, FaTimes, FaSearch, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

// CSS
import "../styles/Home.css";
import "../styles/ProductCard.css";

export default function Home() {
  return (
    <div className="home-container">
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

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-banner__image">
          <img src="/images/Landing.png" alt="Living room" />
        </div>

        <div className="hero-banner__content">
          <p className="hero-banner__subtitle">New Arrival</p>
          <h1 className="hero-banner__title">Discover Our <br /> New Collection</h1>
          <p className="hero-banner__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="hero-banner__button">Buy Now</button>
        </div>
      </section>

      {/* Browse Range */}
      <section className="browse-range">
        <h1 className="section-title">Browse The Range</h1>
        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="range-cards">
          <div className="range-card">
            <img src="/images/image1.png" alt="Dining" />
            <p>Dining</p>
          </div>
          <div className="range-card">
            <img src="/images/image2.png" alt="Living room" />
            <p>Living</p>
          </div>
          <div className="range-card">
            <img src="/images/image3.png" alt="Bedroom" />
            <p>Bedroom</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="product-images">
          <ProductCard name="Syltherine" desc="Stylish cafe chair" price="Rp 2.500.000" oldPrice="Rp 3.500.000" badge="-30%" image="/images/Product1.png" />
          <ProductCard name="Leviosa" desc="Stylish cafe chair" price="Rp 2.500.000" image="/images/Product2.png" />
          <ProductCard name="Lolito" desc="Luxury big sofa" price="Rp 7.000.000" oldPrice="Rp 14.000.000" badge="-50%" image="/images/Product3.png" />
          <ProductCard name="Respira" desc="Outdoor bar table and stool" price="Rp 500.000" badge="New" image="/images/Product4.png" />
          <ProductCard name="Grifo" desc="Night lamp" price="Rp 1.500.000" image="/images/Product5.png" />
          <ProductCard name="Muggo" desc="Small mug" price="Rp 150.000" image="/images/Product6.png" />
          <ProductCard name="Pingky" desc="Cute bed set" price="Rp 7.000.000" oldPrice="Rp 14.000.000" badge="-50%" image="/images/Product7.png" />
          <ProductCard name="Potty" desc="Minimalist flower pot" price="Rp 500.000" badge="New" image="/images/Product8.png" />
        </div>

        <div className="show-more-btn">
          <button>Show More</button>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration-section">
        <div className="inspiration-text">
          <h2>50+ Beautiful rooms inspiration</h2>
          <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <button className="explore-btn">Explore More</button>
        </div>

        <div className="inspiration-images">
          <div className="image-card featured">
            <img src="/images/Decor1.png" alt="Room" />
            <div className="overlay-text">
              <div>
                <span>01 — Bed Room</span>
                <h3>Inner Peace</h3>
              </div>
              <button className="arrow-btn">{">"}</button>
            </div>
          </div>
          <div className="image-card">
            <img src="/images/Decor2.png" alt="Room" />
          </div>
        </div>

        <div className="dot-container">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Furniture Showcase */}
      <section className="funiro-furniture">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
        <div className="furniture-cards">
          <div><img src="/images/Furniture2.png" alt="Leviosa" /></div>
          <div><img src="/images/Furniture3.png" alt="Lolito" /></div>
          <div><img src="/images/Furniture4.png" alt="Respira" /></div>
          <div><img src="/images/Furniture5.png" alt="Grifo" /></div>
          <div><img src="/images/Furniture6.png" alt="Muggo" /></div>
          <div><img src="/images/Furniture7.png" alt="Pingky" /></div>
          <div><img src="/images/Furniture8.png" alt="Potty" /></div>
          <div><img src="/images/Furniture9.png" alt="Potty" /></div>
        </div>
      </section>

      <hr className="line" />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section1 about">
          <h2>Funiro.</h2>
          <p className="para">400 University Drive Suite 200 Coral<br />Gables,<br />FL 33134 USA</p>
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
          <p>2025 Funiro. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
