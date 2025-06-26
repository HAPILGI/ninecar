// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 여기서는 간단히 로그인 성공이라고 가정합니다
    if (username === 'admin' && password === '1234') {
      alert('로그인 성공!');
      navigate('/cars'); // 로그인 성공 시 차량 목록 페이지로 이동
    } else {
      alert('아이디 또는 비밀번호가 틀렸습니다.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: '5px', padding: '8px' }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ margin: '5px', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '8px 20px' }}>
          로그인
        </button>
      </form>
    </div>
  );
}

