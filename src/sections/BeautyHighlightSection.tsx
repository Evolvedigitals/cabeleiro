// src/sections/BeautyHighlightSection.tsx

import React, { useState, useEffect } from 'react';
import './BeautyHighlightSection.css';

// Caminho para as imagens, ajuste conforme onde você as salvou em public/images/
const image1 = '/images/pedras.jpg';
const image2 = '/images/pedras_fundo.jpg'; // Verifique o nome real do seu arquivo!

const BeautyHighlightSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // console.log("BeautyHighlightSection: useEffect is running"); // Remova após depuração
    const interval = setInterval(() => {
      // console.log("BeautyHighlightSection: Interval is triggering"); // Remova após depuração
      setIsFading(true); // Inicia o fade out
      setTimeout(() => {
        setCurrentImage(prevImage => {
          const newImage = (prevImage === image1 ? image2 : image1);
          // console.log("BeautyHighlightSection: Changing image to", newImage); // Remova após depuração
          return newImage;
        });
        setIsFading(false); // Termina o fade in da nova imagem
      }, 500); // Tempo da transição CSS
    }, 5000); // Troca a cada 5 segundos

    return () => {
      // console.log("BeautyHighlightSection: Clearing interval"); // Remova após depuração
      clearInterval(interval);
    };
  }, []);

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
            src={currentImage}
            alt="Detalhes da Beleza do Olimpo"
            className={`beauty-highlight-image ${isFading ? 'fade-out' : 'fade-in'}`}
          />
        </div>
      </div>
      {/* Elementos decorativos (serão estilizados via CSS de fundo ou pseudo-elementos) */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </section>
  );
};

export default BeautyHighlightSection;