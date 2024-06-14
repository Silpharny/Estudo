import ReactDOM from "react-dom/client";

// Router DOM
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import MeusClientes from "./Pages/MeusClientes";

// CSS
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Home titulo="VENDAS" />} path="/" />
      <Route element={<MeusClientes />} path="/MeusClientes" />
    </Routes>
  </BrowserRouter>
);
