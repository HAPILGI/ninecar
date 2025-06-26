// src/components/HeroSection.js
import React from "react";
import "../styles/HeroSection.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleMenuClick = (keyword) => {
    navigate(`/cars?search=${encodeURIComponent(keyword)}`);
  };

  return (
    <section className="hero">
      <div className="hero-container">
        {/* 중앙 텍스트 */}
        <div className="hero-left">
          <h1>NINEGO MOTORS</h1>
          <h2>차량 경공매 플랫폼</h2>
          <p>국내 최대 규모의 차량 경공매 네트워크망을 구축하여 신속한 서비스를 제공합니다.</p>
        </div>

        {/* 가운데 메뉴 */}
        <div className="hero-center">
          <div className="menu-box">
            <h3>경매 차량</h3>
            <ul>
              <li onClick={() => handleMenuClick("전체")}>전체보기</li>
              <li onClick={() => handleMenuClick("이전")}>이전</li>
              <li onClick={() => handleMenuClick("즉시")}>이전(즉시)</li>
              <li onClick={() => handleMenuClick("소손")}>이전(소손, 멸책)</li>
              <li onClick={() => handleMenuClick("폐차")}>폐차</li>
            </ul>
          </div>
        </div>

        {/* 오른쪽 이미지 */}
        <div className="hero-right">
          <img src={require("../assets/hero-car.png")} alt="차량 이미지" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
