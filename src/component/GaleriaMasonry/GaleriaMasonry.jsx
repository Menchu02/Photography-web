// // src/components/GaleriaMasonry/GaleriaMasonry.jsx
// import React from 'react';
// import Masonry from 'react-masonry-css';
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import './GaleriaMasonry.css';

// export default function GaleriaMasonry({ images, category }) {
//   const breakpointColumnsObj = {
//     default: 7,
//     1200: 6,
//     992: 5,
//     768: 4,
//     480: 3,
//   };

//   return (
//     <div className='masonry-container'>
//       <Masonry
//         breakpointCols={breakpointColumnsObj}
//         className='my-masonry-grid'
//         columnClassName='my-masonry-grid_column'
//       >
//         {images.map((src, index) => (
//           <Link
//             to={`/galeria/${category}/${index}`}
//             key={index}
//             className='masonry-item'
//           >
//             <LazyLoadImage
//               src={src}
//               alt={`${category} ${index + 1}`}
//               effect='blur'
//               className='masonry-img'
//             />
//           </Link>
//         ))}
//       </Masonry>
//     </div>
//   );
// }

// src/components/GaleriaMasonry/GaleriaMasonry.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './GaleriaMasonry.css';

export default function GaleriaMasonry({ images, category }) {
  // Patrón de cantidad de imágenes por fila
  const pattern = [7, 7, 8, 9, 8, 7, 8, 7, 8, 7, 9, 8, 8, 8, 7, 7, 9, 8, 7, 8];

  // Agrupar imágenes siguiendo el patrón
  let grouped = [];
  let index = 0;
  for (let count of pattern) {
    grouped.push(images.slice(index, index + count));
    index += count;
  }

  return (
    <div className='gallery-container'>
      {grouped.map((row, rowIndex) => (
        <div key={rowIndex} className='gallery-row'>
          {row.map((src, i) => (
            <Link
              key={i}
              to={`/galeria/${category}/${i}`}
              className='gallery-item'
            >
              <LazyLoadImage src={src} effect='blur' />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
