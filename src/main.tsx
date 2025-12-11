import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser compatibility
window.Buffer = Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <HelmetProvider>
        <App />
        </HelmetProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);