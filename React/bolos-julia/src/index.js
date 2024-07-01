import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home/home';
import Sobre from './Pages/Sobre/sobre';
import Bolos from './Pages/Bolos/bolos';

const RoutesApp = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route element= {<Home />} path="/"/>
        <Route element= {<Sobre />} path='/sobre' />
        <Route element= {<Bolos />} path='/bolos' />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);