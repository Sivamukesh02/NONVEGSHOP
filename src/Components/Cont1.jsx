// Cont1.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Style/cont1.css";
import pan from "../assets/Image/nonpan.png";
import pic1 from "../assets/Image/non1.png";
import pic2 from "../assets/Image/non2.png";
import pic3 from "../assets/Image/non3.png";

function Cont1() {
  return (
    <div className="cont1">
      {/* ---------- Section 1 : 4 features ---------- */}
      <section className="features-section">
        {/* Feature 1 */}
        <div className="feature-box" data-aos="fade-up">
          <div className="feature-circle">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <p className="feature-text">
            100% Fresh
            <br />
            Chicken
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-box" data-aos="fade-up" data-aos-delay="150">
          <div className="feature-circle">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <p className="feature-text">
            Clean &
            <br />
            Hygienic
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-box" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-circle">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <p className="feature-text">
            Fast Hot
            <br />
            Delivery
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-box" data-aos="fade-up" data-aos-delay="450">
          <div className="feature-circle">
            <svg
              className="feature-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <p className="feature-text">
            Made With
            <br />
            Love
          </p>
        </div>
      </section>

      {/* ---------- Section 2 : pan image left, content right ---------- */}
      <section className="pan-section">
        <div className="pan-left" data-aos="fade-right" data-aos-duration="1200">
          <img src={pan} alt="pan" className="pan-img" />
        </div>

        <div className="pan-content" data-aos="fade-left" data-aos-duration="1200">
          <p className="pan-tag">Our Speciality</p>
          <h2 className="section-heading pan-heading">
            Cooked Fresh In Our Special Pan
          </h2>
          <p className="pan-text">
            Every dish is cooked fresh on the pan with our own masala.
            No shortcuts, no old food. Just hot, juicy and tasty non-veg
            served the way you like it.
          </p>

          <ul className="pan-list">
            <li>Fresh meat every morning</li>
            <li>Our own secret masala</li>
            <li>Cooked hot when you order</li>
          </ul>

          <NavLink to="/items" className="pan-btn">
            Explore Items
          </NavLink>
        </div>
      </section>

      {/* ---------- Section 3 : New added menu ---------- */}
      <section className="menu-section">
        <h2 className="section-heading menu-heading" data-aos="zoom-in">
          New Added Menu
        </h2>
        <div className="heading-line"></div>

        <div className="menu-cards">
          {/* Card 1 */}
          <div className="menu-card" data-aos="fade-up">
            <div className="menu-img-box">
              <img src={pic1} alt="Spicy Gravy" className="menu-img" />
            </div>
            <div className="menu-info">
              <div className="menu-top">
                <h3 className="menu-name">Spicy Gravy</h3>
                <p className="menu-price">₹180</p>
              </div>
              <p className="menu-slogan">Rich, thick and full of flavour</p>
              <button className="menu-btn">Order Now</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="menu-card" data-aos="fade-up" data-aos-delay="200">
            <div className="menu-img-box">
              <img src={pic2} alt="Fish Fry" className="menu-img" />
            </div>
            <div className="menu-info">
              <div className="menu-top">
                <h3 className="menu-name">Fish Fry</h3>
                <p className="menu-price">₹220</p>
              </div>
              <p className="menu-slogan">Crispy outside, juicy inside</p>
              <button className="menu-btn">Order Now</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="menu-card" data-aos="fade-up" data-aos-delay="400">
            <div className="menu-img-box">
              <img src={pic3} alt="Full Fish Fry" className="menu-img" />
            </div>
            <div className="menu-info">
              <div className="menu-top">
                <h3 className="menu-name">Full Fish Fry</h3>
                <p className="menu-price">₹350</p>
              </div>
              <p className="menu-slogan">One whole fish, fried to perfection</p>
              <button className="menu-btn">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cont1;