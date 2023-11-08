import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/main.css';
import App from './pages/App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);
reportWebVitals();
