// src/sections/BeautySection.tsx

import './BeautySection.css';

function BeautySection() {
  return (
    <section className="beauty-section">
      <div className="beauty-content">
        <h2 className="section-title">A BELEZA DO OLIMPO</h2>
        <p className="beauty-description">
          Na Olimpo Barbearia, a beleza é uma arte milenar, esculpida com precisão e paixão. Nossos serviços vão além do corte e da barba; são rituais de cuidado que transformam e elevam a sua imagem. Utilizamos técnicas consagradas e produtos de alta qualidade para garantir que cada cliente saia com a confiança e o estilo de um verdadeiro deus.
        </p>
        <p className="beauty-description">
          Permita-se experimentar a excelência e o toque de maestria que só a Olimpo pode oferecer. Agende seu horário e descubra o poder de uma aparência impecável.
        </p>
      </div>
      <div className="beauty-image-container">
        <img src="/images/belezaolimpica.jpg" alt="A Beleza do Olimpo" className="beauty-image" />
      </div>
    </section>
  );
}

// Certifique-se que esta linha esteja presente e correta
export default BeautySection;