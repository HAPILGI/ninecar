// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleChange} value={i18n.language} style={{ padding: '6px', fontSize: '14px' }}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="kg">Кыргызча</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default LanguageSwitcher;
