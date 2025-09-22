import React from 'react';

import photo1 from '..//img/99.jpg';
import Navegador from '../Navegador/Navegador';
import './contacto.css';

export default function Contacto() {
  return (
    <div className='page-container'>
      <Navegador />
      <div className='background-photo-container'>
        <img src={photo1} alt='background' className='background-photo' />
        <h1 className='anime-contact'>CONTACT</h1>
      </div>
      <footer className='footer-items '>
        <h1>collgallardo@gmail.com</h1>
        <h1>+34 613 000 875</h1>
        <h1>Barcelona</h1>
      </footer>
    </div>
  );
}
