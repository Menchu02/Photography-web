import React from 'react';

import './brand.css';
import GaleriaMasonry from '../GaleriaMasonry/GaleriaMasonry';
import Navegador from '../Navegador/Navegador';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function Modelo() {
  const imageCount = 34;

  const images = Array.from(
    { length: imageCount },
    (_, i) => `/assets/stylelife/brand/${i + 1}.jpg`
  );
  const workMenuItems = [
    { label: 'MODELO', path: '/modelo' },
    { label: 'STYLE LIFE', path: '/stylelife' },
  ];
  return (
    <div>
      <Navegador />
      <GaleriaMasonry images={images} category='brand' />
    </div>
  );
}
