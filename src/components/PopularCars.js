// src/components/PopularCars.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PopularCars.css';

const PopularCars = () => {
  const navigate = useNavigate();

  const popularCars = [
    {
      id: 1,
      name: '그랜저 IG',
      price: '1,160만원',
      image: '/images/grandeur-ig.png',
    },
    {
      id: 2,
      name: '아반떼 CN7',
      price: '950만원',
      image: '/images/avante-cn7.png',
    },
    {
      id: 3,
      name: '쏘렌토 MQ4',
      price: '2,250만원',
      image: '/images/sorento-mq4.png',
    },
  ];

  const handleCardClick = (carId) => {
    navigate(`/cars/${carId}`);
  };

  return (
    <div className="popular-cars-section">
      <h2>🔥 인기 차량</h2>
      <div className="popular-cars-container">
        {popularCars.map((car) => (
          <div
            key={car.id}
            className="car-card"
            onClick={() => handleCardClick(car.id)}
            style={{ cursor: 'pointer' }}
          >
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCars;
