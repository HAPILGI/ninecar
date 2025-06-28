// src/components/HeroBanner.js
import React from 'react';

const HeroBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/hero-background.jpg')", // ✅ public 폴더에 있는 이미지 경로
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px', // 배너 높이 조절
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '32px', letterSpacing: '4px' }}>N I N E G O M O T O R S</h1>
      <p style={{ fontSize: '18px', marginTop: '10px' }}>
        언제 어디서든 사고차 경공매 플랫폼
      </p>
    </div>
  );
};

export default HeroBanner;
