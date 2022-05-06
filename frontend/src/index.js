import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Navigation from './Navigation';
import MainContent from './contents/MainContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Navigation />
  </React.StrictMode>,
);
