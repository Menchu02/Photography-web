import { Route, Routes } from 'react-router-dom';

import './App.css';
import Carousel from './component/Carousel/Carousel';

import NavBar from './component/navBar/NavBar';

import Contacto from './component/Contacto/Contacto';

import StyleLife from './component/Style life/StyleLife';
import Brand from './component/Brand/Brand';
import Modelo from './component/Modelo/Modelo';
import Influences from './component/Influences/Influences';
import Galeria from './component/Galeria/Galeria';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavBar />}></Route>

        <Route path='/contacto' element={<Contacto />}></Route>

        <Route path='/modelo' element={<Modelo />}></Route>
        <Route path='/brand' element={<Brand />}></Route>

        <Route path='/stylelife' element={<StyleLife />}></Route>

        <Route path='/influences' element={<Influences />}></Route>

        <Route path='/galeria/:category/:index' element={<Galeria />} />
      </Routes>
    </div>
  );
}

export default App;
