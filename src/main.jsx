
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nava } from "./components/nava.jsx";
import "./css/styles.css";
import { Principal } from "./components/principal.jsx";


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nava tituloNav=" ZNK" />
    <Principal/>
  </React.StrictMode>
);