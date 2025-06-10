import React from 'react';
import { Link } from 'react-router-dom';

export default function Influences() {
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
    </div>
  );
}
