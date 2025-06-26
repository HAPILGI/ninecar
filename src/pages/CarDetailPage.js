// src/pages/CarDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const dummyCars = [
  { id: '1', name: '제네시스 G80', year: 2020, price: '35,000,000원' },
  { id: '2', name: '아반떼 CN7', year: 2021, price: '15,000,000원' },
];

export default function CarDetailPage() {
  const { id } = useParams();
  const car = dummyCars.find((c) => c.id === id);

  if (!car) {
    return <h2>해당 차량을 찾을 수 없습니다.</h2>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>🚘 차량 상세 정보</h2>
      <p><strong>모델명:</strong> {car.name}</p>
      <p><strong>연식:</strong> {car.year}</p>
      <p><strong>가격:</strong> {car.price}</p>
    </div>
  );
}
