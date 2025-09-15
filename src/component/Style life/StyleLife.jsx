import React from 'react';
import { Link } from 'react-router-dom';
import './stylelife.css';
import Navegador from '../Navegador/Navegador';
import GaleriaMasonry from '../GaleriaMasonry/GaleriaMasonry';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function StyleLife() {
  const imageCount = 84;

  const images = Array.from(
    { length: imageCount },
    (_, i) => `/assets/stylelife/${i + 1}.jpg`
  );

  const workMenuItems = [
    { label: 'MODELO', path: '/modelo' },
    { label: 'STYLE LIFE', path: '/stylelife' },
  ];

  return (
    <div>
      <Navegador />
      <GaleriaMasonry images={images} category='stylelife' />
    </div>
  );
}
