// src/components/GaleriaMasonry/GaleriaMasonry.jsx
import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './GaleriaMasonry.css';

export default function GaleriaMasonry({ images, category }) {
  const breakpointColumnsObj = {
    default: 8,
    1200: 6,
    992: 5,
    768: 4,
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
            <LazyLoadImage
              src={src}
              alt={`${category} ${index + 1}`}
              effect='blur'
              className='masonry-img'
            />
          </Link>
        ))}
      </Masonry>
    </div>
  );
}

// src/components/GaleriaMasonry/GaleriaMasonry.jsx
// GaleriaMasonry.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import './GaleriaMasonry.css';

// export default function GaleriaMasonry({ images, category }) {
//   // Patrón base
//   const basePattern = [7, 7, 8, 9, 8, 7, 8, 7, 8, 7, 9, 8, 8, 8];

//   // Calcular columnas según ancho de pantalla
//   const getResponsivePattern = () => {
//     if (window.innerWidth < 480) {
//       return basePattern.map(() => 2); // móviles → 2 fotos por fila
//     } else if (window.innerWidth < 768) {
//       return basePattern.map(() => 3); // tablets → 3 fotos por fila
//     } else if (window.innerWidth < 1200) {
//       return basePattern.map(() => 5); // laptops → 5 fotos por fila
//     } else {
//       return basePattern; // escritorio → patrón original
//     }
//   };

//   // Generar patrón extendido hasta cubrir todas las imágenes
//   const buildPattern = () => {
//     const responsivePattern = getResponsivePattern();
//     let extended = [];
//     let total = 0;

//     while (total < images.length) {
//       extended = extended.concat(responsivePattern);
//       total = extended.reduce((a, b) => a + b, 0);
//     }

//     return extended;
//   };

//   const pattern = buildPattern();

//   // Agrupar imágenes según el patrón extendido
//   let grouped = [];
//   let index = 0;
//   for (let count of pattern) {
//     if (index >= images.length) break; // si no quedan fotos, salimos
//     grouped.push(images.slice(index, index + count));
//     index += count;
//   }

//   return (
//     <div className='gallery-container'>
//       {grouped.map((row, rowIndex) => (
//         <div key={rowIndex} className='gallery-row'>
//           {row.map((src, i) => (
//             <Link
//               key={i}
//               to={`/galeria/${category}/${index}`}
//               className='gallery-item'
//             >
//               <LazyLoadImage src={src} effect='blur' />
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
