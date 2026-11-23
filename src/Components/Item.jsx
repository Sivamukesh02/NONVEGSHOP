// Item.jsx
import React from "react";
import "../assets/Style/item.css";

import chicken from "../assets/Image/chickraw.png";
import gril from "../assets/Image/gril.png";
import egg1 from "../assets/Image/egg1.png";
import egg2 from "../assets/Image/egg2.png";
import img1 from "../assets/Image/non1.png";
import img2 from "../assets/Image/non2.png";
import img3 from "../assets/Image/non3.png";
import fish from "../assets/Image/rawfish.png";
import img4 from "../assets/Image/rawnonveg.png";
import img5 from "../assets/Image/rawnonveg2.png";
import img6 from "../assets/Image/rawnonveg3.png";

function Item() {
  // All cards data - name, rate, slogan maathanum na inga maathu
  // fit: "cover" = image full ah nirappum, "contain" = image crop aagaama muzhusa therium
  const items = [
    {
      name: "Spicy Gravy",
      price: "₹180",
      slogan: "Rich, thick and full of flavour",
      image: img1,
      fit: "cover",
    },
    {
      name: "Fish Fry",
      price: "₹220",
      slogan: "Crispy outside, juicy inside",
      image: img2,
      fit: "cover",
    },
    {
      name: "Full Fish Fry",
      price: "₹350",
      slogan: "One whole fish, fried to perfection",
      image: img3,
      fit: "cover",
    },
    {
      name: "Grilled Chicken",
      price: "₹320",
      slogan: "Smoky, juicy and grilled hot",
      image: gril,
      fit: "contain",
    },
    {
      name: "Egg",
      price: "₹90",
      slogan: "Soft eggs in spicy masala",
      image: egg1,
      fit: "contain",
    },
    {
      name: "Egg",
      price: "₹70",
      slogan: "Simple, tasty and protein rich",
      image: egg2,
      fit: "contain",
    },
    {
      name: "Fresh Chicken",
      price: "₹240/kg",
      slogan: "Cut fresh every morning",
      image: chicken,
      fit: "contain",
    },
    {
      name: "Fresh Fish",
      price: "₹450/kg",
      slogan: "Straight from the sea to you",
      image: fish,
      fit: "contain",
    },
    {
      name: "Fresh Mutton",
      price: "₹850/kg",
      slogan: "Soft and tender mutton pieces",
      image: img4,
      fit: "contain",
    },
    {
      name: "Fresh mutton cuts",
      price: "₹600/kg",
      slogan: "Clean, fresh and ready to cook",
      image: img5,
      fit: "contain",
    },
    {
      name: "mutton piece",
      price: "₹420/kg",
      slogan: "Full of real village taste",
      image: img6,
      fit: "contain",
    },
  ];

  return (
    <div className="itm-page">
      {/* ---------- Section 1 : ITEMS heading ---------- */}
      <section className="itm-hero">
        {/* Mustard half circles */}
        <div className="itm-circle-left"></div>
        <div className="itm-circle-right"></div>

        <h1 className="itm-title" data-aos="zoom-in" data-aos-duration="1200">
          ITEMS
        </h1>
        <div className="itm-line" data-aos="fade-up" data-aos-delay="200"></div>
        <p className="itm-slogan" data-aos="fade-up" data-aos-delay="300">
          Fresh, tasty and made with love
        </p>
      </section>

      {/* ---------- Section 2 : cards - 3 in a line ---------- */}
      <section className="itm-section">
        <div className="itm-cards">
          {items.map((item, index) => (
            <div
              className="itm-card"
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 150}
            >
              {/* Image - zoom on hover */}
              <div className="itm-img-box">
                <img
                  src={item.image}
                  alt={item.name}
                  className="itm-img"
                  style={{ objectFit: item.fit }}
                />
              </div>

              {/* Red part - name, rate, slogan, button */}
              <div className="itm-info">
                <div className="itm-top">
                  <h3 className="itm-name">{item.name}</h3>
                  <p className="itm-price">{item.price}</p>
                </div>
                <p className="itm-card-slogan">{item.slogan}</p>
                <button className="itm-btn">Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Item;