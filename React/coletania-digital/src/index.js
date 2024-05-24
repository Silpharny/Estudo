import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/home';
import Usuario from './Pages/Usuario/usuario';
import Filmes from './Pages/Filmes/filmes'
import Genero from './Pages/Genero/genero'


const RouterApp = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Usuario/>} path='/usuario' />
        <Route element={<Filmes/>} path='/filmes'/>
        <Route element={<Genero/>} path='/genero' />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>
);