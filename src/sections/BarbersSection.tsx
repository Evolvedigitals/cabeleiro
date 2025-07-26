// src/sections/BarbersSection.tsx

import './BarbersSection.css';

function BarbersSection() {
  // Array de objetos para as imagens dos barbeiros
  // Usando URLs de imagens aleatórias por enquanto
  const barbers = [
 { id: 1, src: '/images/cabeliro.jpg', alt: 'Barbeiro 1' },
    { id: 2, src: '/images/cabeliro.jpg', alt: 'Barbeiro 2' },
    { id: 3, src: '/images/cabeliro.jpg', alt: 'Barbeiro 3' },
    { id: 4, src: '/images/cabeliro.jpg', alt: 'Barbeiro 4' },
  ];

  return (
    <section className="barbers-section">
      <h2 className="section-title">OS NOSSOS BARBEIROS</h2>
      <div className="barbers-grid">
        {barbers.map(barber => (
          <div key={barber.id} className="barber-card">
            <img src={barber.src} alt={barber.alt} className="barber-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BarbersSection;