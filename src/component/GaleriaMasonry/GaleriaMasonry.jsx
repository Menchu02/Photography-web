import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import './GaleriaMasonry.css';

export default function GaleriaMasonry({ images, category }) {
  const breakpointColumnsObj = {
    default: 7, // desktop grande
    1200: 6, // laptop
    992: 5, // tablet horizontal
    768: 4, // tablet vertical / móvil grande
    480: 3,
  };
  return (
    <div className='masonry-container'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {images.map((src, index) => (
          <Link
            to={`/galeria/${category}/${index}`}
            key={index}
            className='masonry-item'
          >
            <img
              src={src}
              alt={`${category} ${index + 1}`}
              className='masonry-img'
              loading='lazy'
            />
          </Link>
        ))}
      </Masonry>
    </div>
  );
}
