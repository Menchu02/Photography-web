import React from 'react';
import photo1 from './../img/modelo1.webp';
import photo2 from './../img/modelo2.jpg';
import photo3 from './../img/modelo3.jpg';
import photo4 from './../img/modelo4.jpg';

import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from 'react-router-dom';

import './navBar.css';

export default function NavBar() {
  const images = [
    {
      original: photo1,
    },
    {
      original: photo2,
    },
    {
      original: photo3,
    },
    {
      original: photo4,
    },
  ];
  return (
    <div>
      <nav className='navbar navbar-expand-md bg-light navbar-dark'>
        <div className='container-fluid'>
          {/* El navbar-brand también debe ser blanco */}
          <a className='navbar-brand text-white' href='#'></a>

          <ul className='navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100 gap-3'>
            <li className='nav-item'>
              {/* text-white en los nav-links */}
              <Link className='nav-link text-white' to='/'>
                Home
              </Link>
            </li>

            {/* Dropdown - Ajustes para texto blanco */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-white' // text-white aquí
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Works
              </a>
              {/* Los elementos del dropdown-menu por defecto son oscuros si el fondo es claro.
                  Si necesitas que el texto del dropdown-item sea blanco en un fondo oscuro,
                  necesitarías aplicar 'dropdown-menu-dark' o CSS personalizado.
                  Por ahora, asumimos que el dropdown se abre sobre un fondo que permite el texto negro por defecto.
                  Si quieres que el dropdown tenga fondo oscuro y texto blanco, usa 'dropdown-menu-dark'.
              */}
              <ul className='dropdown-menu **dropdown-transparent-custom**'>
                {' '}
                {/* Puedes añadir 'dropdown-menu-dark' aquí si quieres fondo oscuro para el dropdown */}
                <li>
                  <Link className='dropdown-item' to='/modelo'>
                    Modelo
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/stylelife'>
                    Style life
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/influences'>
                    Influences
                  </Link>
                </li>
              </ul>
            </li>

            <li className='nav-item'>
              <Link className='nav-link text-white' to='/contacto'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='carousel-container'>
        <ReactImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
          showNav={false}
          showBullets={false}
          autoPlay={true}
        />
        <div className='overlay-text'>
          <h1 className='animated-title'>Jesus Coill</h1>
        </div>
      </div>
    </div>
  );
}
