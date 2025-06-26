import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import HeroBanner from '../components/HeroBanner'; // ✅ HeroBanner 추가

function HomePage() {
  const { t } = useTranslation();

  // ✅ Kakao SDK 초기화
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('3e6609c629be3ff5bca1d0a2f2116860');
    }
  }, []);

  // ✅ 공유 함수
  const handleShare = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'NINEGO MOTORS',
          description: '믿고 맡기는 사고차 경매대행',
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
    <div style={{ fontFamily: 'sans-serif', paddingTop: '80px' }}>
      {/* ✅ 언어 선택 드롭다운 */}
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

      {/* ✅ HeroBanner 이미지 전체 배너로 대체 */}
      <HeroBanner />

      {/* ✅ 소개 */}
      <section style={{ marginTop: '30px', textAlign: 'center' }}>
        <h2>{t('specialty')}</h2>
        <p>{t('consult_guide')}</p>
      </section>

      {/* ✅ 상담 폼 */}
      <section
        style={{
          marginTop: '40px',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
        }}
      >
        <h3>{t('consult_title')}</h3>
        <input
          placeholder={t('name')}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          placeholder={t('contact')}
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <textarea
          placeholder={t('requirement')}
          style={{ width: '100%', height: '100px', padding: '10px' }}
        />
        <button
          style={{
            marginTop: '10px',
            padding: '10px',
            width: '100%',
            background: '#000',
            color: '#fff',
            border: 'none',
          }}
        >
          {t('submit')}
        </button>
      </section>

      {/* ✅ 카카오톡 공유 버튼 */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
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
          📢 카카오톡으로 공유하기
        </button>
      </div>

      {/* ✅ 하단 연락처 */}
      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '14px', color: '#666' }}>
        {t('contact_info')}<br />
        {t('footer_address')}<br />
        © 2025 NINEGO MOTORS
      </footer>
    </div>
  );
}

export default HomePage;
