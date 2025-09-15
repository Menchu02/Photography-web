import React from 'react';

import Navegador from '../Navegador/Navegador';
import './modelo.css'; // Asegúrate de que este archivo CSS esté importado
import GaleriaMasonry from '../GaleriaMasonry/GaleriaMasonry';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function Modelo() {
  const imageCount = 152;

  const images = Array.from(
    { length: imageCount },
    (_, i) => `/assets/stylelife/modelo/${i + 1}.jpg`
  );
  const workMenuItems = [
    { label: 'MODELO', path: '/modelo' },
    { label: 'STYLE LIFE', path: '/stylelife' },
  ];
  return (
    <div>
      <Navegador />
      <GaleriaMasonry images={images} category='modelo' />
    </div>
  );
}
