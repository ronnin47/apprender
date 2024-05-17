
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nava } from "./components/nava.jsx";
import "./css/styles.css";
import { Principal } from "./components/principal.jsx";


createRoot(document.getElementById('root')).render( // Usa createRoot para renderizar la aplicación
  <React.StrictMode>
    <Nava tituloNav="ZNK" />
    <Principal/>
  </React.StrictMode>
);