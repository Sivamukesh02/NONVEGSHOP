// Hero.jsx
import React from "react";
import "../assets/Style/hero.css";

import bone from "../assets/Image/bone.png";
import plate from "../assets/Image/emptyplate.png";
import gril from "../assets/Image/gril.png";
import img1 from "../assets/Image/nonhero2.png";
import chicken from "../assets/Image/chickraw.png";

function Hero() {
  return (
    <section className="hero">
      {/* Mustard half circles */}
      <div className="circle-top-left"></div>
      <div className="circle-bottom-right"></div>

      {/* Left side - hand sticks to navbar, plate at the bottom, grill on plate */}
      <div className="hero-left" data-aos="fade-right" data-aos-duration="1200">
        <div className="plate-box">
          <img src={plate} alt="plate" className="plate-img" />
          <img src={gril} alt="grill" className="grill-img" />
        </div>
      </div>

      {/* Center - heading, slogan, content, buttons */}
      <div className="hero-center">
        <h1 className="hero-title" data-aos="zoom-in" data-aos-duration="1200">
          G
          <img src={chicken} alt="O" className="title-chicken" />
          AT
        </h1>

        <p className="hero-slogan" data-aos="fade-up" data-aos-delay="200">
          Greatest Of All Time
        </p>

        <div className="hero-line" data-aos="fade-up" data-aos-delay="300"></div>

        <p className="hero-text" data-aos="fade-up" data-aos-delay="400">
          Juicy grills, spicy fries and the tastiest non-veg
          you will ever eat. Fresh, hot and made with love.
        </p>

        {/* Two bone shaped buttons */}
        <div className="bone-buttons" data-aos="fade-up" data-aos-delay="600">
          {/* Button 1 - white bone */}
          <button className="bone-btn bone-white">
            <span className="knob knob-top-left"></span>
            <span className="knob knob-bottom-left"></span>
            <span className="knob knob-top-right"></span>
            <span className="knob knob-bottom-right"></span>
            <span className="bone-text">Order Now</span>
          </button>

          {/* Button 2 - mustard bone */}
          <button className="bone-btn bone-yellow">
            <span className="knob knob-top-left"></span>
            <span className="knob knob-bottom-left"></span>
            <span className="knob knob-top-right"></span>
            <span className="knob knob-bottom-right"></span>
            <span className="bone-text">View Menu</span>
          </button>
        </div>

        {/* Small line with slogan on left and right */}
        <div className="line-slogan" data-aos="fade-up" data-aos-delay="800">
          <span className="side-text">Always Fresh</span>
          <div className="center-line"></div>
          <span className="side-text">Always Hot</span>
        </div>
      </div>

      {/* Right side - bone on top, hero image below */}
      <div className="hero-right" data-aos="fade-left" data-aos-duration="1200">
        <img src={bone} alt="bone" className="bone-img" />
        <img src={img1} alt="non veg" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;