// Cont2.jsx
import React from "react";
import "../assets/Style/cont2.css";

import chicken from "../assets/Image/chickraw.png";
import about from "../assets/Image/nonhero.png";
import parlax from "../assets/Image/par2.jpg";

function Cont2() {
  return (
    <div className="cont2">
      {/* ---------- Parallax zone : png stays fixed while scrolling, till About ---------- */}
      <div
        className="parallax-zone"
        style={{ backgroundImage: `url(${parlax})` }}
      >
        {/* Parallax section - png is clearly visible here */}
        <section className="parallax-section"></section>

        {/* ---------- Section 1 : 6 cards ---------- */}
        <section className="why-section">
          <h2 className="why-heading" data-aos="zoom-in">
            Why Choose GOAT
          </h2>
          <div className="why-line"></div>

          <div className="why-cards">
            {/* Row 1 : red, white, red */}
            <div className="why-card card-red" data-aos="fade-up">
              <h3 className="why-card-title">Fresh Every Day</h3>
              <p className="why-card-text">
                Our meat comes in fresh every morning. We never keep old stock
                in our kitchen.
              </p>
            </div>

            <div className="why-card card-white" data-aos="fade-up" data-aos-delay="150">
              <h3 className="why-card-title">Clean Kitchen</h3>
              <p className="why-card-text">
                Washed, cleaned and cut in a hygienic kitchen by our own
                trained cooks.
              </p>
            </div>

            <div className="why-card card-red" data-aos="fade-up" data-aos-delay="300">
              <h3 className="why-card-title">Our Own Masala</h3>
              <p className="why-card-text">
                A secret masala made in our own kitchen. You will not find
                this taste anywhere else.
              </p>
            </div>

            {/* Row 2 : white, red, white */}
            <div className="why-card card-white" data-aos="fade-up">
              <h3 className="why-card-title">Hot & Fast Delivery</h3>
              <p className="why-card-text">
                Food goes from the pan to your door hot and on time, every
                single order.
              </p>
            </div>

            <div className="why-card card-red" data-aos="fade-up" data-aos-delay="150">
              <h3 className="why-card-title">Fair Prices</h3>
              <p className="why-card-text">
                Big tasty portions at prices that never hurt your pocket.
              </p>
            </div>

            <div className="why-card card-white" data-aos="fade-up" data-aos-delay="300">
              <h3 className="why-card-title">Made With Love</h3>
              <p className="why-card-text">
                Every dish is cooked with care, just like the food you get
                at home.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Section 2 : red band with yellow circle ---------- */}
        <section className="band-section">
          {/* Left text */}
          <div className="band-left" data-aos="fade-right" data-aos-duration="1200">
            <p className="band-small">Fresh</p>
            <h2 className="band-big">Curry Cut</h2>
            <p className="band-small">Chicken</p>
          </div>

          {/* Center yellow circle with chicken */}
          <div className="band-circle" data-aos="zoom-in" data-aos-duration="1200">
            <img src={chicken} alt="fresh chicken" className="band-chicken" />
          </div>

          {/* Right text */}
          <div className="band-right" data-aos="fade-left" data-aos-duration="1200">
            <h3 className="band-right-title">Cut Just The Way You Cook</h3>
            <ul className="band-list">
              <li>Soft and tender pieces</li>
              <li>Washed and cleaned</li>
              <li>Ready to cook</li>
            </ul>
          </div>
        </section>
      </div>

      {/* ---------- Section 3 : About ---------- */}
      <section className="about-section">
        {/* Left image */}
        <div className="about-left" data-aos="fade-right" data-aos-duration="1200">
          <div className="about-circle"></div>
          <img src={about} alt="about" className="about-img" />
        </div>

        {/* Right content */}
        <div className="about-content" data-aos="fade-left" data-aos-duration="1200">
          <h2 className="about-heading">About GOAT</h2>
          <div className="about-line"></div>
          <p className="about-text">
            GOAT means Greatest Of All Time, and that is the taste we
            promise in every plate. We started with one simple idea: serve
            the tastiest non-veg that everyone can enjoy every day.
          </p>
          <p className="about-text">
            We pick fresh chicken, mutton and fish every morning, clean it
            ourselves and cook it only when you order. No shortcuts, no
            leftovers, just hot and juicy food served with a big smile.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Cont2;