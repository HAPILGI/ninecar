// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/cars?search=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        placeholder="차량명 또는 키워드 검색"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          padding: '10px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: '10px',
          padding: '10px 20px',
          backgroundColor: '#ffd500',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        검색
      </button>
    </div>
  );
}
