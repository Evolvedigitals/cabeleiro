// src/sections/HeroSection.tsx

import React, { useState } from 'react';
import './HeroSection.css';
import BookingModal from '../components/BookingModal'; // Importar o novo componente modal

const heroBackgroundImage = '/images/OLIMPO.JPG'; // Certifique-se de que este caminho está correto

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Esta é a função que será chamada quando a marcação for COMPLETADA no BookingModal
  const handleCompleteBooking = (data: {
    barberId: number | null;
    cutId: number | null;
    date: string | null;
    timeId: number | null;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  }) => {
    console.log("Marcação finalizada com os seguintes dados:", data);
    // Aqui você pode adicionar a lógica para o que acontece depois da marcação:
    // - Enviar os dados para um backend (API)
    // - Exibir uma mensagem de sucesso para o usuário
    // - Redirecionar para uma página de confirmação
    alert(`Marcação para ${data.clientName} agendada com sucesso!\nDetalhes: ${data.cutId} com barbeiro ${data.barberId} em ${data.date} às ${data.timeId}`);
    // O modal já é fechado internamente pelo handleFinalConfirm no BookingModal
  };

  return (
    <section className="hero-section">
      <div className="hero-background-overlay" style={{ backgroundImage: `url(${heroBackgroundImage})` }}></div>
      
      <div className="hero-content">
        <h1 className="hero-title">Were Gods are made</h1>
        <button className="hero-button" onClick={handleOpenModal}>Marcações</button>
      </div>

      {/* Renderizar o BookingModal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        // REMOVA a linha abaixo, pois onSelectBarber NÃO EXISTE mais no BookingModal:
        // onSelectBarber={handleSelectBarber}
        // E ADICIONE a prop onCompleteBooking:
        onCompleteBooking={handleCompleteBooking}
      />
    </section>
  );
};

export default HeroSection;