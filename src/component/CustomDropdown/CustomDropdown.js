// src/components/CustomDropdown/CustomDropdown.js
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Si tus ítems son Link
import './CustomDropdown.css'; // Crearemos este CSS ahora

const CustomDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Para detectar clics fuera

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el desplegable si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li className='custom-dropdown-container' ref={dropdownRef}>
      <a
        className='custom-dropdown-toggle menu-item-text' // Usamos tu clase de texto si quieres que sea negra
        href='#'
        onClick={toggleDropdown}
        aria-haspopup='true'
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {title}
      </a>
      {isOpen && (
        <ul className='custom-dropdown-menu'>
          {items.map((item, index) => (
            <li key={index}>
              <Link
                className='custom-dropdown-item'
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default CustomDropdown;
