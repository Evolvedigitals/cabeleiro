// src/sections/HeroSection.tsx

import React, { useState } from 'react'; // Importar useState
import './HeroSection.css';
import BookingModal from '../components/BookingModal'; // Importar o novo componente modal

const heroBackgroundImage = '/images/OLIMPO.JPG';

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectBarber = (barberId: number | null) => {
    // Aqui você faria a lógica para o que acontece após selecionar um barbeiro
    // Por exemplo, navegar para a próxima etapa, salvar a preferência, etc.
    if (barberId === null) {
      console.log('Cliente escolheu "Sem preferência"');
    } else {
      console.log(`Cliente selecionou o barbeiro com ID: ${barberId}`);
    }
    handleCloseModal(); // Fecha o modal após a seleção
  };

  return (
    <section className="hero-section">
      <div className="hero-background-overlay" style={{ backgroundImage: `url(${heroBackgroundImage})` }}></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Were Gods are made</h1>
        <button className="hero-button" onClick={handleOpenModal}>Marcações</button> {/* Adicionar onClick */}
      </div>

      {/* Renderizar o BookingModal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSelectBarber={handleSelectBarber}
      />
    </section>
  );
};

export default HeroSection;