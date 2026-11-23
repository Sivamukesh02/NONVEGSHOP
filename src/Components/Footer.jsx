// Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Style/footer.css";
import chicken from "../assets/Image/chickraw.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - logo, about, social icons */}
        <div className="footer-col" data-aos="fade-up">
          <div className="footer-logo">
            <img src={chicken} alt="logo" className="footer-logo-img" />
            <h2 className="footer-title">GOAT</h2>
          </div>

          <p className="footer-about">
            Greatest Of All Time non-veg. Juicy grills, spicy fries
            and fresh food made with love.
          </p>

          {/* Social icons */}
          <div className="social-icons">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                <g transform="translate(7 7) scale(0.42)">
                  <path
                    strokeWidth="3"
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 - quick links */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="150">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li>
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/items" className="footer-link">
                Items
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3 - our menu */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="300">
          <h3 className="footer-heading">Our Menu</h3>
          <ul className="footer-list">
            <li className="footer-text">Chicken Biryani</li>
            <li className="footer-text">Grilled Chicken</li>
            <li className="footer-text">Mutton Curry</li>
            <li className="footer-text">Fish Fry</li>
          </ul>
        </div>

        {/* Column 4 - contact */}
        <div className="footer-col" data-aos="fade-up" data-aos-delay="450">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-list">
            <li className="footer-text">123, Food Street, Your City</li>
            <li className="footer-text">+91 98765 43210</li>
            <li className="footer-text">hello@goat.com</li>
            <li className="footer-text">Open: 10 AM - 11 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 GOAT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;