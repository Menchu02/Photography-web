import React from 'react';
import photo1 from '../img/14.jpg';
import photo2 from '../img/23.jpg';
import photo3 from '../img/87.jpg';
import photo4 from '../img/9.jpg';

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
      <nav className='navbar -md bg-light navbar-dark'>
        <div className='container-fluid'>
          {/* El navbar-brand también debe ser blanco */}
          <a className='navbar-brand text-white' href='#'></a>

          <ul className='navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100 gap-3'>
            <li className='nav-item'>
              {/* text-white en los nav-links */}
              <Link className='nav-link text-white menu-item-text' to='/'>
                HOME
              </Link>
            </li>

            {/* Dropdown - Ajustes para texto blanco */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-white menu-item-text' // text-white aquí
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                WORK
              </a>
              {/* Los elementos del dropdown-menu por defecto son oscuros si el fondo es claro.
                  Si necesitas que el texto del dropdown-item sea blanco en un fondo oscuro,
                  necesitarías aplicar 'dropdown-menu-dark' o CSS personalizado.
                  Por ahora, asumimos que el dropdown se abre sobre un fondo que permite el texto negro por defecto.
                  Si quieres que el dropdown tenga fondo oscuro y texto blanco, usa 'dropdown-menu-dark'.
              */}
              <ul className='dropdown-menu '>
                {' '}
                {/* Puedes añadir 'dropdown-menu-dark' aquí si quieres fondo oscuro para el dropdown */}
                <li>
                  <Link className='dropdown-item' to='/modelo'>
                    MODELO
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/stylelife'>
                    STYLE LIFE
                  </Link>
                </li>
                {/* <li>
                  <Link className='dropdown-item' to='/influences'>
                    Influences
                  </Link>
                </li> */}
              </ul>
            </li>

            <li className='nav-item'>
              <Link
                className='nav-link text-white menu-item-text'
                to='/contacto'
              >
                CONTACT
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
          <h1 className='animated-title'>Viridiana Morandini</h1>
        </div>
      </div>
    </div>
  );
}
