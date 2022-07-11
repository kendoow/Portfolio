import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './Router/Router';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);


