import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css'; // Asegúrate de que esta ruta sea correcta
import App from './App';  // Asegúrate de que App.js está correctamente ubicado

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
