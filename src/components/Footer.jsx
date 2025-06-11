import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="home-container">
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
          <p>2025 Funiro. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
