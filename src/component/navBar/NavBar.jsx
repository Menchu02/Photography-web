import React from 'react';

import CustomCarousel from '../CustomCarousel/CustomCarousel';

// import ReactImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from 'react-router-dom';

import './navBar.css';

export default function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
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

              <ul className=' dropdown-menu dropdown-menu-dark'>
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
        <CustomCarousel />
        <div className='overlay-text'>
          <h1 className='animated-title'>Jesús Coll</h1>
        </div>
      </div>
    </div>
  );
}
