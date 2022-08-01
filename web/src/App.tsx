import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App(): JSX.Element {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ToastContainer /> 
        <Routes />
      </ThemeProvider>
    </Router>
  );
}
