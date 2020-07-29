import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

import './styles.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Champsflix" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
