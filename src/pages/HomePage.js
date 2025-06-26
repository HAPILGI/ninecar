import React from 'react';
import logo from '../assets/logo.png'; // 로고 파일 위치에 따라 경로 조정 필요

function HomePage() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      {/* 상단 배너 */}
      <div style={{ background: '#000', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <img src={logo} alt="NINEGO 로고" style={{ height: '80px', marginBottom: '10px' }} />
        <h1 style={{ fontSize: '24px' }}>NINEGO MOTOSR - 믿고 맡기는 사고차 경매 대행</h1>
      </div>

      {/* 소개 */}
      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>사고차 경매 / 수출 대행 전문</h2>
        <p>카톡으로 상담하고, 원하는 차량 조건만 알려주세요.</p>
      </section>

      {/* 간단 상담 폼 */}
      <section style={{
        marginTop: '40px',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px'
      }}>
        <h3>상담 요청</h3>
        <input placeholder="이름" style={{ width: '100%', marginBottom: '10px', padding: '10px' }} />
        <input placeholder="연락처 (전화/카톡)" style={{ width: '100%', marginBottom: '10px', padding: '10px' }} />
        <textarea placeholder="차량 조건이나 희망사항" style={{ width: '100%', height: '100px', padding: '10px' }} />
        <button style={{ marginTop: '10px', padding: '10px', width: '100%', background: '#000', color: '#fff' }}>
          보내기
        </button>
      </section>
{/* 카카오톡 상담 버튼 */}
<div style={{ textAlign: 'center', marginTop: '40px' }}>
  <a
    href="https://open.kakao.com/o/sKZH7LDh" // ← 여기에 본인 채널 주소 넣으세요
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      backgroundColor: '#FEE500',
      padding: '10px 20px',
      borderRadius: '20px',
      color: '#000',
      fontWeight: 'bold',
      textDecoration: 'none',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    }}
  >
    💬 카카오톡 상담하기
  </a>
</div>

      {/* 하단 연락처 */}
      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        전화: 010-9138-2775 | FAX: 0504-160-2775<br />
        카카오톡: @ninego | 주소: 인천 연수구 연수동 556-6, 202호<br />
        © 2025 NINEGO MOTOSR
      </footer>
    </div>
  );
}

export default HomePage;
