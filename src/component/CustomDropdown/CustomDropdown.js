// src/components/CustomDropdown/CustomDropdown.js
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomDropdown.css';

const CustomDropdown = ({ title, items, isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Cierra el desplegable si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <li className='custom-dropdown-container' ref={dropdownRef}>
      <a
        className='custom-dropdown-toggle menu-item-text'
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
