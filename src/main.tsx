// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importa os estilos globais
import App from './App'; // Importa o componente App principal
// import reportWebVitals from './reportWebVitals'; // Removido conforme discutido para evitar o erro

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App /> {/* Renderiza o componente App */}
  </React.StrictMode>
);

// Se você precisar de reportWebVitals, certifique-se de que o arquivo existe
// e descomente a importação e a chamada.
// reportWebVitals();