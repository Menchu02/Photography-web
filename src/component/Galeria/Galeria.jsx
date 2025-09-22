import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './galeria.css';

const allGalleriesImages = {
  modelo: Array.from(
    { length: 152 },
    (_, i) => `/assets/stylelife/modelo/${i + 1}.jpg`
  ),
  stylelife: Array.from(
    { length: 84 },
    (_, i) => `/assets/stylelife/${i + 1}.jpg`
  ),
  brand: Array.from(
    { length: 34 },
    (_, i) => `/assets/stylelife/brand/${i + 1}.jpg`
  ),
};

export default function Galeria() {
  const { category, index } = useParams();
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Estados para swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (allGalleriesImages[category]) {
      const imagesForCategory = allGalleriesImages[category];
      setCurrentGalleryImages(imagesForCategory);
      setImageCount(imagesForCategory.length);

      const parsedIndex = parseInt(index, 10);
      if (
        !isNaN(parsedIndex) &&
        parsedIndex >= 0 &&
        parsedIndex < imagesForCategory.length
      ) {
        setCurrentImageIndex(parsedIndex);
      } else {
        navigate(`/galeria/${category}/0`);
      }
    } else {
      navigate('/');
    }
  }, [category, index, navigate]);

  const goTo = (newIndex) => {
    if (newIndex >= 0 && newIndex < imageCount) {
      navigate(`/galeria/${category}/${newIndex}`);
    } else if (newIndex < 0) {
      navigate(`/galeria/${category}/${imageCount - 1}`);
    } else {
      navigate(`/galeria/${category}/0`);
    }
  };

  // Swipe con el dedo
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;
    if (touchStartX - touchEndX > 50) {
      goTo(currentImageIndex + 1);
    }
    if (touchEndX - touchStartX > 50) {
      // swipe derecha
      goTo(currentImageIndex - 1);
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  if (!currentGalleryImages.length || currentImageIndex === undefined) {
    return <div>Cargando imagen...</div>;
  }

  return (
    <div>
      <div className='carousel-fullscreen container'>
        <Link to={`/${category}`} className='btn btn-dark gallery-index-button'>
          Index
        </Link>

        {!isMobile && (
          <button
            onClick={() => goTo(currentImageIndex - 1)}
            className='carousel-arrow left'
          >
            ←
          </button>
        )}

        <img
          src={currentGalleryImages[currentImageIndex]}
          alt={`${category} ${currentImageIndex + 1}`}
          className='carousel-imagen'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />

        {!isMobile && (
          <button
            onClick={() => goTo(currentImageIndex + 1)}
            className='carousel-arrow right'
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
