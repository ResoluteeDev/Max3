import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  height: 400px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 12px;
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselImage = styled.img`
  min-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.6);
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  z-index: 2;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
