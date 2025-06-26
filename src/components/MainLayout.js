// src/components/MainLayout.js
import React from 'react';
import TopNav from './TopNav';

export default function MainLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginLeft: '200px', width: '100%' }}>
        <TopNav />
        <main>{children}</main>
      </div>
    </div>
  );
}