import React from 'react';
import { Link } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

export default function Contacto() {
  const workMenuItems = [
    { label: 'MODELO', path: '/modelo' },
    { label: 'STYLE LIFE', path: '/stylelife' },
  ];
  return (
    <div className='page-container'>
      <nav className='navbar navbar-expand-md bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand text-black' href='#'></a>

          <ul className='navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100 gap-3'>
            <li className='nav-item'>
              <Link className='nav-link text-black menu-item-text' to='/'>
                HOME
              </Link>
            </li>
            <CustomDropdown title='WORK' items={workMenuItems} />

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
      {/* <footer className='footer'>
        <p>email</p>
        <p>telefono</p>
        <p>redes sociales</p>
      </footer> */}
    </div>
  );
}
