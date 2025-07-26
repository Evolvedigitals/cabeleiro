// src/sections/HeroSection.tsx

import './HeroSection.css';

function HeroSection() {
  return (
    <section 
      className="hero-section" 
      // Caminho absoluto para a imagem na pasta public
      style={{ backgroundImage: `url(/images/barbershop-bg.jpg)` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Where Gods are made</h1>
        <button className="hero-button">Marcações</button>
      </div>
    </section>
  );
}

export default HeroSection;