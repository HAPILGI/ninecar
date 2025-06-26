// 📄 src/pages/CarListPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function CarListPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type') || 'all';

  // 예시 차량 데이터
  const allCars = [
    { id: 1, model: '쏘렌토 MQ4', type: 'suv', price: 1800 },
    { id: 2, model: 'K5 DL3', type: 'sedan', price: 1200 },
    { id: 3, model: '아반떼 AD', type: 'sedan', price: 700 },
  ];

  // type 필터링
  const filteredCars = type === 'all'
    ? allCars
    : allCars.filter(car => car.type === type);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🚗 차량 목록</h2>
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>
            <strong>{car.model}</strong> - {car.price}만원
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarListPage;
