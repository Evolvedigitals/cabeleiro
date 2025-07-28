// src/sections/Header.tsx

import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-left">
        <span className="header-logo">OLIMPO</span>
      </div>
      
      {/* NOVO: Agrupar navegação e ícone de perfil em uma div */}
      <div className="header-right-group">
        <nav className="header-nav">
          <ul>
            <li><a href="#olimpo-skin" className="nav-item">
              <img src="/images/olimpo_skin_icon.png" alt="Olimpo Skin" className="nav-icon" />
              OLIMPO SKIN
            </a></li>
            <li><a href="#olimpo-wear" className="nav-item">
              <img src="/images/olimpo_wear_icon.png" alt="Olimpo Wear" className="nav-icon" />
              OLIMPO WEAR
            </a></li>
          </ul>
        </nav>
        {/* Ícone de Perfil separado para controle de espaçamento e alinhamento */}
        <a href="#profile" className="header-profile-link"> {/* NOVO: Link para o ícone de perfil */}
            <img src="/images/profile_icon.png" alt="Perfil" className="header-profile-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;