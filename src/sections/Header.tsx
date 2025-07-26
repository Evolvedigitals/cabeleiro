// src/sections/Header.tsx

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        {/* Caminho absoluto para a imagem na pasta public */}
        <img src="/images/logo-olimpo.jpg" alt="Logo Olimpo" />
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#olimpo-skin">OLIMPO SKIN</a></li>
          <li><a href="#olimpo-wear">OLIMPO WEAR</a></li>
          <li>
            <a href="#profile">
              {/* Ícone de usuário simples, ou você pode usar um SVG/PNG */}
              <span className="user-icon">👤</span> 
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;