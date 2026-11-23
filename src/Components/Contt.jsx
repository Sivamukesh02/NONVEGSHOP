// Contact.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Style/contact.css";

import bone from "../assets/Image/bone.png";

function Contt() {
  // Form submit - page reload aagama irukka
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    e.target.reset();
  }

  return (
    <div className="contact-page">
      {/* ---------- Section 1 : address and form ---------- */}
      <section className="contact-section">
        {/* Heading and slogan */}
        <h1 className="contact-heading" data-aos="zoom-in">
          Contact Us
        </h1>
        <p className="contact-slogan" data-aos="fade-up" data-aos-delay="200">
          We would love to hear from you
        </p>

        <div className="contact-container">
          {/* Left - address */}
          <div className="address-col" data-aos="fade-right" data-aos-duration="1200">
            <h2 className="address-title">Visit Our Kitchen</h2>
            <p className="address-text">
              Come and taste the Greatest Of All Time non-veg, or send us a
              message and we will reply soon.
            </p>

            {/* Address */}
            <div className="info-row">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="info-title">Address</h3>
                <p className="info-text">123, Food Street, Your City - 600001</p>
              </div>
            </div>

            {/* Phone */}
            <div className="info-row">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="info-title">Phone</h3>
                <p className="info-text">+91 98765 43210</p>
              </div>
            </div>

            {/* Email */}
            <div className="info-row">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="info-title">Email</h3>
                <p className="info-text">hello@goat.com</p>
              </div>
            </div>

            {/* Timing */}
            <div className="info-row">
              <div className="info-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h3 className="info-title">Open Time</h3>
                <p className="info-text">Every day, 10 AM - 11 PM</p>
              </div>
            </div>

            {/* Bone below the address */}
            <img src={bone} alt="bone" className="bone-bottom" />
          </div>

          {/* Right - form */}
          <div className="form-box" data-aos="fade-left" data-aos-duration="1200">
            {/* Bone on top of the form */}
            <img src={bone} alt="bone" className="bone-top" />

            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Send Us A Message</h2>

              <label className="form-label">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-input"
                required
              />

              <label className="form-label">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input"
                required
              />

              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="form-input"
              />

              <label className="form-label">Your Message</label>
              <textarea
                placeholder="Write your message here"
                className="form-input form-textarea"
                required
              ></textarea>

              <button type="submit" className="form-btn">
                <span>Send Message</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------- Section 2 : order now ---------- */}
      <section className="cta-section" data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="cta-title">Hungry? Order Now</h2>
        <p className="cta-slogan">Hot, fresh and delivered to your door</p>

        {/* Bone shaped button */}
        <NavLink to="/items" className="cta-btn">
          <span className="cta-knob cta-knob-top-left"></span>
          <span className="cta-knob cta-knob-bottom-left"></span>
          <span className="cta-knob cta-knob-top-right"></span>
          <span className="cta-knob cta-knob-bottom-right"></span>
          <span className="cta-btn-text">Order Now</span>
        </NavLink>
      </section>
    </div>
  );
}

export default Contt;