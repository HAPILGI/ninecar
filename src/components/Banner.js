// src/components/Banner.js
import React from 'react';
import bannerImage from '../assets/ninego-banner-yellow.png';
import { useNavigate } from 'react-router-dom';

export default function Banner() {
  const navigate = useNavigate();

  const goToLogin = (type) => {
    // 로그인 타입에 따라 다른 방식으로 처리할 수도 있음
    navigate('/login'); // 지금은 경로 동일하게
    // 나중에 navigate(`/login?type=${type}`); 처럼 구분 가능
  };

  return (
    <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
      <img
        src={bannerImage}
        alt="Ninego Motors Banner"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '300px',
          objectFit: 'cover',
        }}
      />

      {/* 로그인 버튼 2개 배너 아래 가운데 정렬 */}
      <div style={{ marginTop: '-50px', position: 'relative', zIndex: 1 }}>
        <button
          onClick={() => goToLogin('partner')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0033a0',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          협력사 로그인
        </button>

        <button
          onClick={() => goToLogin('member')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f57c00',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          회원 로그인
        </button>
      </div>
    </div>
  );
}
