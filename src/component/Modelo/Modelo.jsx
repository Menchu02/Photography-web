import React from 'react';
import { Link } from 'react-router-dom';
import './modelo.css';
import GaleriaMasonry from '../GaleriaMasonry/GaleriaMasonry';

export default function Modelo() {
  const imageCount = 152;

  const images = Array.from(
    { length: imageCount },
    (_, i) => `/assets/stylelife/modelo/${i + 1}.jpg`
  );
  return (
    <div>
      <nav className='navbar navbar-expand-md bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand text-black' href='#'></a>

          <ul className='navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100 gap-3'>
            <li className='nav-item'>
              <Link className='nav-link text-black menu-item-text' to='/'>
                HOME
              </Link>
            </li>

            {/* Dropdown en lugar de accordion */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-black menu-item-text'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                WORK
              </a>
              <ul className='dropdown-menu dropdown-dark-text'>
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
                className='nav-link text-black menu-item-text'
                to='/contacto'
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* GALERÍA */}
      {/* Tu componente GaleriaMasonry ya no estará envuelto por el div con 'gallery-container' y 'ref' */}
      <GaleriaMasonry images={images} category='modelo' />

      {/* <div className='container-fluid p-3'>
        <div className=' container-photo row g-4'>
          {images.map((src, index) => (
            <div className='col-6 col-md-4 col-lg-2 ' key={index}>
              <Link to={`/galeria/modelo/${index}`}>
                <img
                  src={src}
                  alt={`modelo ${index + 1}`}
                  className='img-fluid rounded image-grid-thumbnail'
                  loading='lazy'
                />
              </Link>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
