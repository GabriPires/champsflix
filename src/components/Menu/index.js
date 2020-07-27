import React from 'react';
import logo from '../../assets/logo.png';

import ButtonLink from './components/ButtonLink';

import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Champsflix" />
      </a>
      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
