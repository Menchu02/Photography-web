import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CustomCarousel.css'; // Crearemos este archivo CSS en el siguiente paso
import photo1 from '../img/14.jpg';
import photo2 from '../img/23.jpg';
import photo3 from '../img/87.jpg';
import photo4 from '../img/9.jpg';

const images = [photo1, photo2, photo3, photo4];

// Define las variantes de animación para Framer Motion
const variants = {
  enter: (direction) => {
    return {
      // La imagen entra desde la derecha (100%) o izquierda (-100%)
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
      // La imagen sale hacia la izquierda (-100%) o derecha (100%)
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 1.5, // Misma duración para la salida
        ease: [0.25, 1, 0.5, 1], // Misma función de temporización
      },
    };
  },
};

const CustomCarousel = () => {
  // page[0] es el índice de la página actual, page[1] es la dirección de la animación
  const [[page, direction], setPage] = React.useState([0, 0]);

  // Calcula el índice real de la imagen en el array
  const imageIndex = page % images.length;

  // Función para avanzar o retroceder en el carrusel
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Efecto para el auto-play del carrusel
  React.useEffect(() => {
    const interval = setInterval(() => {
      paginate(1); // Avanza una diapositiva cada 4 segundos
    }, 2000); // Intervalo de 4 segundos (ajusta si lo necesitas)

    // Limpia el intervalo cuando el componente se desmonte o el efecto se re-ejecute
    return () => clearInterval(interval);
  }, [page]); // Dependencia 'page' para reiniciar el intervalo cuando la página cambia

  return (
    <div className='custom-carousel-container'>
      {/* AnimatePresence permite animar componentes que se montan/desmontan */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page} // La clave única es crucial para que AnimatePresence detecte cambios
          custom={direction} // Pasa la dirección a las variantes
          variants={variants} // Aplica las variantes de animación
          initial='enter' // Estado inicial al montar
          animate='center' // Estado al estar en el centro (visible)
          exit='exit' // Estado al salir
          style={{ backgroundImage: `url(${images[imageIndex]})` }}
          className='carousel-image'
        />
      </AnimatePresence>
    </div>
  );
};

export default CustomCarousel;
