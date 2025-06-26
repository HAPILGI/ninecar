// src/components/SideMenu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SideMenu.css';

export default function SideMenu() {
  const navigate = useNavigate();

  // 메뉴 클릭 시 이동 경로를 정리해 두면 편리합니다
  const menuList = [
    { label: '전체보기', path: '/cars' },
    { label: '이전',       path: '/cars?type=previous' },
    { label: '이전(전손)', path: '/cars?type=total-loss' },
    { label: '이전(분손, 멸책)', path: '/cars?type=partial-loss' },
    { label: '폐차',       path: '/cars?type=scrap' }
  ];

  return (
    <nav className="side-menu">
      <h3>경매 차량</h3>
      <ul>
        {menuList.map((item) => (
          <li
            key={item.label}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
