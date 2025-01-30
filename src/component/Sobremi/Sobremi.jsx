import React from 'react';
import './sobremi.css';
import { Link } from 'react-router-dom';

export default function Sobremi() {
  return (
    <div>
      <nav className='navbar navbar-dark navbar-expand-md '>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbar-toggler'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar-toggler'>
            <a className='navbar-brand' href='#'>
              {/* <img src={fotoLogo} alt='icono' /> */}
            </a>
            <ul className='navbar-nav d-flex justify-content-center align-items-center '>
              <li className='nav-item parrafo'>
                <Link to={'/'}>
                  <a
                    className='nav-link active text-blanck'
                    aria-current='page'
                  >
                    Inicio
                  </a>
                </Link>
              </li>
              <div id='accordionExample' className='accordion '>
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      Works
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse '
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <Link className='linksStyle' to={'/editorial'}>
                        <p className='text'>Editorial</p>
                      </Link>
                      <Link className='linksStyle' to={'/stylelife'}>
                        <p className='text'>Style life</p>
                      </Link>
                      <Link className='linksStyle' to={'/famosos'}>
                        <p className='text'>Famosos</p>
                      </Link>
                      <Link className='linksStyle' to={'/videos'}>
                        <p className='text'>Vídeos</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <li className='nav-item'>
                <Link to={'/sobremi'}>
                  <a className='nav-link ' aria-disabled='true'>
                    Sobre mí
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contacto'}>
                  <a className='nav-link ' aria-disabled='true'>
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
