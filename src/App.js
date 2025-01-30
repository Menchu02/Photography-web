import { Route, Routes } from 'react-router-dom';
import './App.css';
import Carousel from './component/Carousel/Carousel';

import NavBar from './component/navBar/NavBar';
import TrabajoPersonal from './component/TrabajoPersonal/TrabajoPersonal';
import Sobremi from './component/Sobremi/Sobremi';
import Contacto from './component/Contacto/Contacto';
import Editorial from './component/Editorial/Editorial';
import StyleLife from './component/Style life/StyleLife';
import Famosos from './component/Famosos/Famosos';
import VideoComponente from './component/VideoComponente/VideoComponente';

function App() {
  return (
    <div className='App'>
      {/* <i
        style={{
          fontSize: '90px',
        }}
        className='bi bi-android2'
      ></i>
      <div className='container'>
        <div className='accordion accordion-flush' id='accordionFlushExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseOne'
                aria-expanded='false'
                aria-controls='flush-collapseOne'
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id='flush-collapseOne'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseTwo'
                aria-expanded='false'
                aria-controls='flush-collapseTwo'
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id='flush-collapseTwo'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#flush-collapseThree'
                aria-expanded='false'
                aria-controls='flush-collapseThree'
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id='flush-collapseThree'
              className='accordion-collapse collapse'
              data-bs-parent='#accordionFlushExample'
            >
              <div className='accordion-body'>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h1 className='text-center'>Hola, Bootstrap en React!</h1>
        <button className='btn btn-primary'>Botón de Bootstrap</button>
      </div>
      <div
        style={{
          backgroundColor: 'lightblue',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
        className='container'
      >
        .container
      </div>
      <div
        style={{
          backgroundColor: 'lightblue',
          padding: '20px',
          borderRadius: '10px',
          textAlign: 'center',
        }}
        className='container-fluid'
      >
        .container-fluid
      </div>
      <div
        style={{
          border: '4px solid',
          marginTop: '10px',
        }}
        className='container text-center'
      >
        <div className='row'>
          <div
            style={{
              backgroundColor: 'blue',
              padding: '20px',
              borderRadius: '10px',
            }}
            className='col-sm-4 col-lg-6'
          >
            ejemplo1
          </div>
          <div
            style={{
              backgroundColor: 'blue',
              padding: '20px',
              borderRadius: '10px',
            }}
            className='col-sm-8 col-lg-6'
          >
            ejemplo2
          </div>
        </div>
      </div> */}
      {/* <Carousel /> */}
      <Routes>
        <Route path='/' element={<NavBar />}></Route>
      </Routes>
      <Routes>
        <Route path='/trabajopersonal' element={<TrabajoPersonal />}></Route>
      </Routes>
      <Routes>
        <Route path='/sobremi' element={<Sobremi />}></Route>
      </Routes>
      <Routes>
        <Route path='/contacto' element={<Contacto />}></Route>
      </Routes>
      <Routes>
        <Route path='/editorial' element={<Editorial />}></Route>
      </Routes>
      <Routes>
        <Route path='/stylelife' element={<StyleLife />}></Route>
      </Routes>
      <Routes>
        <Route path='/famosos' element={<Famosos />}></Route>
      </Routes>
      <Routes>
        <Route path='/videos' element={<VideoComponente />}></Route>
      </Routes>

      {/* <Carousel /> */}
    </div>
  );
}

export default App;
