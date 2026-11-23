// Abo.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Style/about.css";
import chicken from "../assets/Image/chickraw.png";
import bone from "../assets/Image/bone.png";
import gril from '../assets/Image/gril.png';
function Abo() {
  return (
    <div className="abo-page">
      {/* ---------- Section 1 : red band attached to navbar ---------- */}
      <section className="abo-hero">
        {/* Shaking bones */}
        <img src={bone} alt="bone" className="abo-bone abo-bone-left" />
        <img src={bone} alt="bone" className="abo-bone abo-bone-right" />

        {/* Yellow round - half comes out below the red band */}
        <div className="abo-circle" data-aos="zoom-in" data-aos-duration="1200">
          <img src={chicken} alt="chicken" className="abo-circle-img" />
          <h1 className="abo-title">
            <span className="abo-goat">GOAT</span>
            <span className="abo-about">About</span>
          </h1>
        </div>
      </section>

      {/* ---------- Section 2 : content rows ---------- */}
      <div className="abo-main">
        {/* Row 1 : chicken left, content right */}
        <div className="abo-row">
          <div className="abo-img-box" data-aos="fade-right" data-aos-duration="1200">
            <img src={chicken} alt="fresh chicken" className="abo-img" />
          </div>

          <div className="abo-content" data-aos="fade-left" data-aos-duration="1200">
            <h2 className="abo-heading">About GOAT</h2>
            <p className="abo-text">
              GOAT means Greatest Of All Time, and that is the taste we
              promise in every plate. We are a non-veg kitchen that cooks
              fresh chicken, mutton and fish with our own masala, made
              with love for everyone who enjoys good food.
            </p>

            <h3 className="abo-subheading">Our Special Curry</h3>
            <p className="abo-text">
              Our curry is cooked slowly with fresh chicken, hand ground
              masala and a rich thick gravy. Every spoon is full of flavour
              and goes perfectly with hot rice, parotta or chapati.
            </p>
          </div>
        </div>

        {/* Row 2 : content left, chicken right */}
        <div className="abo-row">
          <div className="abo-content" data-aos="fade-right" data-aos-duration="1200">
            <span className="abo-tag">New Launch</span>
            <h2 className="abo-heading">Fry Non-Veg Is Here</h2>
            <p className="abo-text">
              We have just started serving fry non-veg too! Crispy chicken
              fry, spicy fish fry and more, fried fresh in our own masala
              and served hot, crunchy on the outside and juicy inside.
            </p>
            <p className="abo-text">
              Our fry items are made fresh when you order, so you always
              get the best taste in every bite.
            </p>
          </div>

          <div className="abo-img-box" data-aos="fade-left" data-aos-duration="1200">
            <img src={gril} alt="fresh chicken" className="abo-img" />
          </div>
        </div>
      </div>

      {/* ---------- Section 3 : slogan and button ---------- */}
      <section className="abo-cta" data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="abo-cta-slogan">Taste The Greatest Of All Time</h2>

        {/* Bone shaped button */}
        <NavLink to="/items" className="abo-btn">
          <span className="abo-knob abo-knob-top-left"></span>
          <span className="abo-knob abo-knob-bottom-left"></span>
          <span className="abo-knob abo-knob-top-right"></span>
          <span className="abo-knob abo-knob-bottom-right"></span>
          <span className="abo-btn-text">Order Now</span>
        </NavLink>
      </section>
    </div>
  );
}

export default Abo;