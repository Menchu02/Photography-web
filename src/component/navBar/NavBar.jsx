import React from 'react';

import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from 'react-router-dom';

import './navBar.css';

export default function NavBar() {
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
    {
      original:
        'https://img.freepik.com/fotos-premium/rios-que-brotan-rapidos-cascadas-que-fluyen-rapidamente-lo-largo-rocas_726113-1545.jpg?size=626&ext=jpg&ga=GA1.1.1788068356.1717027200&semt=ais_user',
    },
  ];
  return (
    <div>
      <nav className='navbar navbar-dark navbar-expand-md '>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbar-toggler'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar-toggler'>
            <a className='navbar-brand' href='#'>
              {/* <img src={fotoLogo} alt='icono' /> */}
            </a>
            <ul className='navbar-nav d-flex justify-content-center align-items-center '>
              <li className='nav-item parrafo'>
                <Link to={'/'}>
                  <a
                    className='nav-link active text-blanck'
                    aria-current='page'
                  >
                    Inicio
                  </a>
                </Link>
              </li>
              <div id='accordionExample' className='accordion '>
                <div className='accordion-item'>
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      Works
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse '
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <Link className='linksStyle' to={'/editorial'}>
                        <p className='text'>Editorial</p>
                      </Link>
                      <Link className='linksStyle' to={'/stylelife'}>
                        <p className='text'>Style life</p>
                      </Link>
                      <Link className='linksStyle' to={'/famosos'}>
                        <p className='text'>Famosos</p>
                      </Link>
                      <Link className='linksStyle' to={'/videos'}>
                        <p className='text'>Vídeos</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <li className='nav-item'>
                <Link to={'/sobremi'}>
                  <a className='nav-link ' aria-disabled='true'>
                    Sobre mí
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contacto'}>
                  <a className='nav-link ' aria-disabled='true'>
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='carousel-container'>
        <ReactImageGallery
          items={images}
          showPlayButton={false}
          showThumbnails={false}
          showNav={false}
          showBullets={true}
          autoPlay={true}
        />
      </div>

      {/* carousel
      <div
        id='carouselExampleAutoplaying'
        class='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src={fotoCarmen1}
              className='d-block img-carousel '
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img src={fotoFisio} className='d-block img-carousel ' alt='...' />
          </div>
          <div className='carousel-item'>
            <img
              src={fotoCarmen2}
              className='d-block img-carousel '
              alt='...'
            />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleAutoplaying'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div> */}
    </div>
  );
}
