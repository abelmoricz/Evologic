import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img from '../assets/map.png';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={img} onDragStart={handleDragStart} />,
  <img src={img} onDragStart={handleDragStart} />,
  <img src={img} onDragStart={handleDragStart} />,
];

const Gallery = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}
