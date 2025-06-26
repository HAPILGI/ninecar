import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>홈</Link>
      <Link to="/cars" style={{ marginRight: '10px' }}>차량 목록</Link>
      {!username ? (
        <Link to="/login">로그인</Link>
      ) : (
        <button onClick={handleLogout}>로그아웃</button>
      )}
    </nav>
  );
}
