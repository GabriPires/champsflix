import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';

import './index.css';

const pagina404 = () => <div>Página 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
