// src/sections/BeautyHighlightSection.tsx

import React from 'react';
import './BeautyHighlightSection.css';

// Caminho para a imagem, ajuste conforme necessário.
const imagemUnica = '/images/livro.jpg';

const BeautyHighlightSection: React.FC = () => {
  return (
    <section className="beauty-highlight-section">
      <div className="beauty-highlight-content-wrapper">
        <div className="beauty-highlight-text-container">
          <h2 className="beauty-highlight-title">A BELEZA DO OLIMPO</h2>
          <p className="beauty-highlight-paragraph">
            Há mais de uma década que a Olimpo Barber é o destino de cavalheiros exigentes que
            apreciam as coisas boas da vida. Os nossos mestres barbeiros combinam técnicas
            consagradas com um estilo contemporâneo para proporcionar uma experiência de beleza
            incomparável.
          </p>
          <p className="beauty-highlight-paragraph">
            Cada corte, cada barba, cada detalhe é executado com precisão e mestria. Não cortamos apenas cabelo –
            criamos obras-primas.
          </p>
        </div>
        <div className="beauty-highlight-image-container">
          <img
            src={imagemUnica}
            alt="Detalhes da Beleza do Olimpo"
            className="beauty-highlight-image" // Apenas a classe base é necessária
          />
        </div>
      </div>
      {/* Elementos decorativos */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </section>
  );
};

export default BeautyHighlightSection;