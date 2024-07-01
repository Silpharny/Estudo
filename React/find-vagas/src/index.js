import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Perfil from './Pages/Perfil/perfil';
import Vagas from './Pages/Vagas/vagas';
import Cadastrar from './Pages/Cadastrar/cadastrar';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const RouteFindVagas = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Perfil />} path='/' />
        <Route element={<Vagas />} path='/vagas' />
        <Route element={<Cadastrar />} path='/cadastrar' />
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouteFindVagas />
  </React.StrictMode>
);
