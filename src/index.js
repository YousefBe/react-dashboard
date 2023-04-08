import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {DatkModeContextProvider} from './context/dark-mode-context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DatkModeContextProvider>
      <App />
    </DatkModeContextProvider>
  </React.StrictMode>
);
