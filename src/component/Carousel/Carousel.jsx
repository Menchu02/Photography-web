import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './carousel.css';
import photo1 from '../img/14.jpg';
import photo2 from '../img/23.jpg';
import photo3 from '../img/87.jpg';

export default function Carousel() {
  const images = [
    {
      original: photo1,
    },
    {
      original: photo2,
    },
    // {
    //   original: photo3,
    // },
  ];

  return (
    <div
      style={{
        width: '100%',
        hidth: '100%',
        margin: '0px',
        objectFit: 'cover',
      }}
    ></div>
  );
}
