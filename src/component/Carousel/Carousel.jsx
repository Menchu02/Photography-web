import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './carousel.css';

export default function Carousel() {
  const images = [
    {
      original:
        'https://media.istockphoto.com/id/1170655400/es/foto/paisaje-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=PGzoWyD3e3kQx1sxvHCRKifufkm6h22-b25hRA_DXII=',
    },
    {
      original:
        'https://media.istockphoto.com/id/474110360/es/foto/vista-panor%C3%A1mica-de-la-puesta-de-sol-sobre-el-bosque.jpg?s=612x612&w=0&k=20&c=aIHFfjuHnQViTgoQCSRj-IvI1dzlpjRCGV-22pSXgoI=',
    },
    {
      original:
        'https://img.freepik.com/fotos-premium/hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_916211-259186.jpg',
    },
  ];

  return (
    <div style={{ width: '100%', margin: '0px', objectFit: 'cover' }}>
      <ReactImageGallery
        items={images}
        showPlayButton={false}
        showThumbnails={false}
        showNav={false}
        showBullets={true}
        autoPlay={true}
      />
    </div>
  );
}
