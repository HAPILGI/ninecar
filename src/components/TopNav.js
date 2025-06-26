// src/components/TopNav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-ninego.svg';
import '../styles/TopNav.css';

export default function TopNav() {
  const [search, setSearch] = React.useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/cars?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <header className="top-nav">
      <img src={logo} alt="NINEGO MOTORS 로고" className="logo" />

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="모델명 또는 차량명으로 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">검색</button>
      </form>

      <div className="login-links">
        <a href="/login?type=partner">협력사 로그인</a>
        <span>|</span>
        <a href="/login">회원 로그인</a>
      </div>
    </header>
  );
}
