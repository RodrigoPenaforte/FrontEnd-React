import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Destino from "./views/Destino";
import Promocao from "./views/Promocao";
import Contato from "./views/Contato";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import EscolhaVoo from "./views/EscolhaVoo";
import Pagamento from './views/Pagamento';




function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="EscolhaVoo" element={<EscolhaVoo/>} />
        <Route path="Pagamento" element={<Pagamento/>} />
        
        
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
