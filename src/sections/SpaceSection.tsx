// src/sections/SpaceSection.tsx

import './SpaceSection.css';

function SpaceSection() {
  // Array de objetos para as imagens do espaço
  // Coloque aqui os caminhos para suas 6 imagens (ou use placeholders temporários)
  const spaceImages = [
    { id: 1, src: '/images/esp1.jpg', alt: 'Interior do Espaço 1' },
    { id: 2, src: '/images/esp2.jpg', alt: 'Interior do Espaço 2' },
    { id: 3, src: '/images/esp3.jpg', alt: 'Interior do Espaço 3' },
    { id: 4, src: '/images/esp4.jpg', alt: 'Interior do Espaço 4' },
    { id: 5, src: '/images/esp5.jpg', alt: 'Interior do Espaço 5' },
    { id: 6, src: '/images/esp6.jpg', alt: 'Interior do Espaço 6' },
  ];

  // Se não tiver 6 imagens agora, pode usar a mesma imagem para todos
  // Exemplo usando 'cabeliro.jpg' para todas as 6 posições
  /*
  const spaceImages = [
    { id: 1, src: '/images/cabeliro.jpg', alt: 'Interior do Espaço 1' },
    { id: 2, src: '/images/cabeliro.jpg', alt: 'Interior do Espaço 2' },
    { id: 3, src: '/images/cabeliro.jpg', alt: 'Interior do Espaço 3' },
    { id: 4, src: '/images/cabeliro.jpg', alt: 'Interior do Espaço 4' },
    { id: 5, src: '/images/cabeliro.jpg', alt: 'Interior do Espaço 5' },
    { id: 6, src: '/images/cabeliro.jpg', alt: 'Interior do Espaço 6' },
  ];
  */

  return (
    <section className="space-section">
      <h2 className="section-title">O NOSSO ESPAÇO</h2>
      <p className="space-description">
        Descubra o ambiente exclusivo da Olimpo Barbearia, um lugar onde a tradição encontra a modernidade para proporcionar uma experiência inesquecível. Cada detalhe foi pensado para o seu conforto e bem-estar.
      </p>
      <div className="space-gallery-grid">
        {spaceImages.map(image => (
          <div key={image.id} className="space-gallery-item">
            <img src={image.src} alt={image.alt} className="space-image" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpaceSection;