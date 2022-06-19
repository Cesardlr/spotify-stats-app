import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TokenContextProvider from './context/TokenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* I wrapped app with the token context provider so every children of App gets the token and logout states */}
    <TokenContextProvider>
      <App />
    </TokenContextProvider>
  </React.StrictMode>
);
