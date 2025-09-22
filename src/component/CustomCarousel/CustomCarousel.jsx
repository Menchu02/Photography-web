import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomCarousel.css'; // Crearemos este archivo CSS en el siguiente paso
// import photo1 from '../img/14.jpg';
// import photo2 from '../img/23.jpg';
import photo1 from '../img/1.jpg';
import photo2 from '../img/2.jpg';
import photo3 from '../img/3.jpg';
import photo4 from '../img/4.jpg';
import photo5 from '../img/5.jpg';
import photo6 from '../img/6.jpg';

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      // Duración de la transición de la diapositiva
      duration: 1.3, // Ajusta este valor para controlar la velocidad general
      // Función de temporización 'ease-out' para el efecto de frenada
      // [c1, c2, c3, c4] define una curva de Bézier cúbica.
      // Esta curva específica crea un efecto de "aceleración al inicio y frenada al final".
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: (direction) => {
    return {
      zIndex: 0,

      x: direction < 0 ? '100%' : '-100%',
      opacity: 0.3,
      transition: {
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1],
      },
    };
  },
};

const CustomCarousel = () => {
  const [[page, direction], setPage] = React.useState([0, 0]);

  const imageIndex = page % images.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 2000); // Intervalo de 4 segundos (ajusta si lo necesitas)

    return () => clearInterval(interval);
  }, [page]); // Dependencia 'page' para reiniciar el intervalo cuando la página cambia

  return (
    <div className='custom-carousel-container'>
      {/* AnimatePresence permite animar componentes que se montan/desmontan */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          style={{ backgroundImage: `url(${images[imageIndex]})` }}
          className='carousel-image'
        />
      </AnimatePresence>
    </div>
  );
};

export default CustomCarousel;
