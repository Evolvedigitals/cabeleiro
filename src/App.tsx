// src/App.tsx

import React from 'react';
import Header from './sections/Header'; // Presumo que você terá um arquivo Header.tsx
import HeroSection from './sections/HeroSection'; // Presumo que você terá um arquivo HeroSection.tsx
import BarbersSection from './sections/BarbersSection'; // Presumo que você terá um arquivo BarbersSection.tsx
import OlimpoCoinSection from './sections/OlimpoCoinSection'; // Presumo que você terá um arquivo OlimpoCoinSection.tsx
import BeautyHighlightSection from './sections/BeautyHighlightSection'; // A seção de "A Beleza do Olimpo"
import SpaceSection from './sections/SpaceSection'; // Presumo que você terá um arquivo SpaceSection.tsx
import ContactSection from './sections/ContactSection'; // A seção de Contato
import './index.css'; // Para estilos globais ou App.css se você criar um separado

// Componente Footer simples
function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Olimpo Barbearia. Todos os direitos reservados.</p>
      <p>Desenvolvido com paixão no Olimpo.</p>
    </footer>
  );
}

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Ordem das seções conforme sua última solicitação */}
        <HeroSection />
        <BarbersSection />
        <OlimpoCoinSection />
        <BeautyHighlightSection /> {/* A seção que discutimos com texto e imagem */}
        <SpaceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;