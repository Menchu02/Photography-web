import React from 'react';

import CustomCarousel from '../CustomCarousel/CustomCarousel';

import './navBar.css';
import Navegador from '../Navegador/Navegador';

export default function NavBar() {
  return (
    <div>
      <Navegador />
      <div className='carousel-container'>
        <CustomCarousel />
        <div className='overlay-text'>
          <h1 className='animated-title'>Jesús Coll</h1>
        </div>
      </div>
    </div>
  );
}
