import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// For some reason, StrictMode renders components twice (on dev but not production).
root.render(
    <App />
);