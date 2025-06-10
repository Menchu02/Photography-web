import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './galeria.css'; // Si quieres estilos personalizados
import { Link } from 'react-router-dom';

export default function Galeria() {
  const { index } = useParams();
  const navigate = useNavigate();
  const imageIndex = parseInt(index, 10);
  const imageCount = 152;

  const images = Array.from(
    { length: imageCount },
    (_, i) => `/assets/stylelife/modelo/${i + 1}.jpg`
  );

  const goTo = (newIndex) => {
    if (newIndex >= 0 && newIndex < imageCount) {
      navigate(`/galeria/${newIndex}`);
    }
  };

  return (
    <div>
      <nav className='navbar navbar-expand-md bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand text-black' href='#'></a>

          <ul className='navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100 gap-3'>
            <li className='nav-item'>
              <Link className='nav-link text-black' to='/'>
                Home
              </Link>
            </li>

            {/* Dropdown en lugar de accordion */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-black'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Works
              </a>
              <ul className='dropdown-menu'>
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
              <Link className='nav-link text-black' to='/contacto'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='carousel-fullscreen container'>
        <button
          onClick={() => goTo(imageIndex - 1)}
          className='carousel-arrow left'
        >
          ←
        </button>
        <img
          src={images[imageIndex]}
          alt={`modelo ${imageIndex + 1}`}
          className='carousel-image'
        />
        <button
          onClick={() => goTo(imageIndex + 1)}
          className='carousel-arrow right'
        >
          →
        </button>
      </div>
    </div>
  );
}
