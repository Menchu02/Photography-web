import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './galeria.css'; // Si quieres estilos personalizados

// --- DEFINICIÓN CENTRAL DE LAS IMÁGENES POR GALERÍA ---
// Es crucial que esta definición sea precisa y refleje tus estructuras de carpetas
// Aquí recopilamos todas las rutas de imágenes para cada categoría.
const allGalleriesImages = {
  modelo: Array.from(
    { length: 152 }, // Asegúrate de que este conteo sea correcto para Modelo
    (_, i) => `/assets/stylelife/modelo/${i + 1}.jpg`
  ),
  stylelife: Array.from(
    { length: 84 }, // Asegúrate de que este conteo sea correcto para StyleLife
    (_, i) => `/assets/stylelife/${i + 1}.jpg`
  ),
  // Añade Influences si también tiene una galería y la quieres integrar aquí
  influences: Array.from(
    { length: 100 }, // Cambia 100 por el número real de imágenes de Influences
    (_, i) => `/assets/influences/${i + 1}.jpg` // Asegúrate de que esta ruta sea correcta
  ),
};

export default function Galeria() {
  // --- CAMBIO CLAVE: Ahora obtenemos 'category' y 'index' ---
  const { category, index } = useParams();
  const navigate = useNavigate();

  // Estados para manejar la imagen actual y el conjunto de imágenes de la galería
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);
  const [imageCount, setImageCount] = useState(0); // Nuevo estado para la cantidad de imágenes de la galería actual

  // useEffect para actualizar la galería cuando cambian los parámetros de la URL
  useEffect(() => {
    if (allGalleriesImages[category]) {
      // Selecciona el array de imágenes correcto según la categoría
      const imagesForCategory = allGalleriesImages[category];
      setCurrentGalleryImages(imagesForCategory);
      setImageCount(imagesForCategory.length);

      // Asegúrate de que el índice es un número válido y dentro de los límites
      const parsedIndex = parseInt(index, 10);
      if (
        !isNaN(parsedIndex) &&
        parsedIndex >= 0 &&
        parsedIndex < imagesForCategory.length
      ) {
        setCurrentImageIndex(parsedIndex);
      } else {
        // Si el índice no es válido, podrías redirigir o mostrar un error
        console.warn(
          `Índice de imagen no válido para la categoría ${category}: ${index}. Redirigiendo a la primera imagen.`
        );
        navigate(`/galeria/${category}/0`); // Redirige a la primera imagen si el índice es inválido
      }
    } else {
      // Si la categoría no existe, redirigir a Home o mostrar un error
      console.error(`Categoría de galería no encontrada: ${category}`);
      navigate('/'); // Redirige al inicio o a una página de error
    }
  }, [category, index, navigate]); // Dependencias: se ejecuta cuando category o index cambian

  const goTo = (newIndex) => {
    // La navegación ahora incluye la categoría
    if (newIndex >= 0 && newIndex < imageCount) {
      navigate(`/galeria/${category}/${newIndex}`);
    } else if (newIndex < 0) {
      // Si llegamos al principio, ir al final (bucle)
      navigate(`/galeria/${category}/${imageCount - 1}`);
    } else {
      // Si llegamos al final, ir al principio (bucle)
      navigate(`/galeria/${category}/0`);
    }
  };

  // Si no tenemos imágenes o el índice actual no es válido (ej. primera carga)
  if (!currentGalleryImages.length || currentImageIndex === undefined) {
    return <div>Cargando imagen...</div>; // O un spinner/mensaje de carga
  }

  return (
    <div>
      {/* Navegación superior (la misma que tenías) */}
      {/* <nav className='navbar navbar-expand-md bg-light'>
        <div className='container-fluid'>
          <a className='navbar-brand text-black' href='#'></a>
          <ul className='navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center w-100 gap-3'>
            <li className='nav-item'>
              <Link className='nav-link text-black' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle text-black'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Works
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <Link className='dropdown-item' to='/modelo'>
                    Modelo
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/stylelife'>
                    Style life
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/influences'>
                    Influences
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-black' to='/contacto'>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

      {/* Visor de la imagen central */}
      <div className='carousel-fullscreen container'>
        <Link to={`/${category}`} className='btn btn-dark gallery-index-button'>
          Index
        </Link>
        <button
          onClick={() => goTo(currentImageIndex - 1)}
          className='carousel-arrow left'
        >
          ←
        </button>
        <img
          src={currentGalleryImages[currentImageIndex]} // Usa el array de imágenes correcto
          alt={`${category} ${currentImageIndex + 1}`}
          className='carousel-imagen'
        />
        <button
          onClick={() => goTo(currentImageIndex + 1)}
          className='carousel-arrow right'
        >
          →
        </button>
      </div>
    </div>
  );
}
