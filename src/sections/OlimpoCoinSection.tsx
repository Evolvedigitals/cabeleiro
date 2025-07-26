// src/sections/OlimpoCoinSection.tsx

import './OlimpoCoinSection.css';

function OlimpoCoinSection() {
  return (
    <section className="olimpo-coin-section">
      <div className="olimpo-coin-image-container">
        {/* Caminho para a imagem da moeda */}
        <img src="/images/logo-olimpo.jpg" alt="Olimpo Coin" className="olimpo-coin-image" />
      </div>
      <div className="olimpo-coin-content">
        <h2 className="section-title">OLIMPO COIN</h2>
        <p className="coin-description">
          Descubra os benefícios exclusivos da Olimpo Coin, o nosso programa de fidelidade que recompensa a sua lealdade. Acumule pontos a cada serviço, troque por descontos especiais, produtos exclusivos e experiências únicas na Olimpo Barbearia. A sua jornada no Olimpo vale ouro!
        </p>
        <button className="coin-button">VER MAIS...</button>
      </div>
    </section>
  );
}

export default OlimpoCoinSection;