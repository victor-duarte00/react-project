import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/globalStyle';

import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './routes'


ReactDOM.render(
  <>
    <Router>
      <MainRoutes />
    </Router>
    <GlobalStyle />
  </>,
  document.getElementById('root')
);

