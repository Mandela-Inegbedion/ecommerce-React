// Contact.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
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

      <div className="contact-page">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Reach out with any questions or feedback!
        </p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
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
