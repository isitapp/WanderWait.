import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo.png" alt="Logo de WanderWait" className="logo" />
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#packages">Paquetes</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
