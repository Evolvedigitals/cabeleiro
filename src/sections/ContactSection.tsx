// src/sections/ContactSection.tsx

import React from 'react';
import './ContactSection.css'; // Importa os estilos CSS para este componente

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section-container" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">CONTACTA-NOS</h2>
        <p className="contact-description">
          Estamos aqui para responder às suas questões e agendar o seu próximo corte.
        </p>

        <div className="contact-info-map-wrapper">
          {/* Informações de Contato */}
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i> {/* Ícone de localização */}
              <div className="contact-text">
                <p>Localização</p>
                <p>Rua Júlio Queijeiro 2b</p>
                <p>2605-001</p>
                <p>Portugal</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i> {/* Ícone de telefone */}
              <div className="contact-text">
                <p>Telefone</p>
                <p>+351 926 867 332</p>
                <p className="small-text">Chamadas e SMS (horário de funcionamento)</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i> {/* Ícone de email */}
              <div className="contact-text">
                <p>E-mail</p>
                <p>olimpo.barber@gmail.com</p>
                <p className="small-text">Respondemos em 24h</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i> {/* Ícone de relógio para horário */}
              <div className="contact-text">
                <p>Horário de funcionamento</p>
                <p>Segunda a Sexta: 9:00 - 20:00</p>
                <p>Sábado: 9:00 - 18:00</p>
                <p>Domingo: Encerrado</p>
              </div>
            </div>
          </div>

          {/* Mapa do Google Maps (Embed) */}
          <div className="contact-map">
            {/* O mapa nas imagens parece ser uma imagem estática ou um embed simples.
                Usaremos um iframe do Google Maps aqui. O src precisa ser ajustado para a sua localização real.
                Este é apenas um placeholder genérico. */}
            <iframe
              title="Localização da Barbearia Olimpo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5123985558943!2d-8.00000!3d40.00000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAwJzAwLjAiTiA4wrAwMCcwMC4wIlc!5e0!3m2!1spt-PT!2spt!4v1678896000000!5m2!1spt-PT!2spt"
              width="100%"
              height="450" // Aumentado para visualização melhor
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;