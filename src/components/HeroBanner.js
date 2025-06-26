// src/components/HeroBanner.js
import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img
        src="/images/hero-banner.jpg"
        alt="Hero Banner"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>NINEGO MOTORS</h1>
        <p>믿고 맡기는 사고차 경매 대행</p>
      </div>
    </div>
  );
};

export default HeroBanner;
