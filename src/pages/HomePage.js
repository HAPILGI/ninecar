// HomePage.js
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import LanguageSwitcher from '../components/LanguageSwitcher';

function HomePage() {
  const { t } = useTranslation();
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 모바일 판단

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('3e6609c629be3ff5bca1d0a2f2116860');
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ninego', 'template_sd9brgr', formRef.current, 'tA9G4eEd3CqxvGn3y')
      .then(
        (result) => {
          console.log('✅ 이메일 전송 성공:', result.text);
          setSubmitted(true);
        },
        (error) => {
          console.error('❌ 이메일 전송 실패:', error);
          alert('전송에 실패했습니다. 다시 시도해주세요.');
        }
      );
  };

  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'NINEGO MOTORS',
          description: 'NINECAR 사고차 경공매',
          imageUrl: 'https://ninegomotors.com/share-image.jpg',
          link: {
            mobileWebUrl: 'https://ninegomotors.com',
            webUrl: 'https://ninegomotors.com',
          },
        },
        buttons: [
          {
            title: '웹사이트 방문하기',
            link: {
              mobileWebUrl: 'https://ninegomotors.com',
              webUrl: 'https://ninegomotors.com',
            },
          },
        ],
      });
    }
  };

  return (
    <div
      style={{
        fontFamily: 'sans-serif',
        backgroundImage: "url('/hero-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '80px',
        position: 'relative',
        color: '#fff',
      }}
    >
      {/* 언어 변경 */}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          backgroundColor: '#fff',
          padding: '8px 12px',
          borderRadius: '8px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        }}
      >
        <LanguageSwitcher />
      </div>

      {/* 왼쪽 상단 상담 버튼 */}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          position: 'fixed',
          top: isMobile ? '80px' : '100px',
          left: isMobile ? '10px' : '60px',
          backgroundColor: '#FEE500',
          color: '#000',
          padding: isMobile ? '8px 16px' : '10px 20px',
          borderRadius: '30px',
          fontWeight: 'bold',
          fontSize: isMobile ? '13px' : '15px',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
          zIndex: 9999,
        }}
      >
        📩 {showForm ? '닫기' : '상담하기'}
      </button>

      {/* 상담 폼 */}
      {showForm && (
        <div
          style={{
            maxWidth: isMobile ? '90%' : '500px',
            margin: '40px auto',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
          }}
        >
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{t('consult_title')}</h3>
          {submitted ? (
            <p style={{ color: 'lightgreen', textAlign: 'center' }}>{t('submit_success')}</p>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder={t('name')}
                required
                style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
              />
              <input
                type="text"
                name="user_contact"
                placeholder={t('contact')}
                required
                style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
              />
              <textarea
                name="message"
                placeholder={t('requirement')}
                style={{ width: '100%', height: '100px', padding: '10px' }}
                required
              />
              <button
                type="submit"
                style={{
                  marginTop: '10px',
                  padding: '10px',
                  width: '100%',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {t('submit')}
              </button>
            </form>
          )}

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button
              onClick={handleShare}
              style={{
                backgroundColor: '#FEE500',
                padding: '10px 20px',
                borderRadius: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              }}
            >
              📩 카카오톡 상담
            </button>
          </div>
        </div>
      )}

     {/* 하단 정보 */}
<footer
  style={{
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    fontSize: '14px',
    color: '#ddd',
    backgroundColor: 'rgba(0,0,0,0.4)', // 선택 사항
    padding: '10px 20px',
    borderRadius: '8px',
    lineHeight: '1.6',
  }}
>
  전화: 010-7903-4790 | FAX: 0504-160-2775<br />
  카카오톡: ninego | 주소: 인천 연수구 연수동 556-6, 202호<br />
  © 2025 NINEGO MOTORS
</footer>

    </div>
  );
}

export default HomePage;
