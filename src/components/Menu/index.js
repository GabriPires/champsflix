import React from 'react';
import logo from '../../assets/logo.png';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Champsflix" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
