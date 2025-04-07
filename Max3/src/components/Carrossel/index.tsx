import React, { useState, useEffect } from 'react';
import { CarouselWrapper, CarouselTrack, CarouselImage, NavButton } from './styles';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
  '/img8.jpg',
  '/img9.jpg',
  '/img10.jpg',
];

const Carrossel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 segundos

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <CarouselWrapper>
      <NavButton onClick={handlePrev}>‹</NavButton>
      <CarouselTrack style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <CarouselImage key={i} src={src} alt={`Slide ${i + 1}`} />
        ))}
      </CarouselTrack>
      <NavButton onClick={handleNext}>›</NavButton>
    </CarouselWrapper>
  );
};

export default Carrossel;
