import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// CSS
import './index.css';

// Pages
import Home from './Pages/Home';
import MyClients from './Pages/MyClients';

// React Router Dom
const RoutesApp = () => {
  
  return(

    <BrowserRouter>
      <Routes>
        <Route element={<Home titulo="Sales" className="novaClasse"/>} path='/' />
        <Route element={<MyClients />} path='/MyClients' />
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

