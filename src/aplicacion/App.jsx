import { useState } from 'react'
import '../estilos/estilos.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Home from "../pages/Home.jsx"; // Asegúrate de que la ruta sea correcta

function App() {
  
  return (
        <BrowserRouter>
          <ScrollToTop>
            <Routes>
              <Route element={<Home />} path="/" />
            </Routes>
          </ScrollToTop>
      </BrowserRouter>
  )
}

export default App