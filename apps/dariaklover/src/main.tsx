import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppConfigProvider from './app/providers/AppConfigProvider';
import CalendlyProvider from './app/providers/CalendlyProvider';
import ColorModeProvider from './app/providers/ColorModeProvider';
import ThemeProvider from './app/providers/ThemeProvider';

import App from './app/app';

import '@fontsource/roboto/cyrillic-400.css';
import '@fontsource/roboto/cyrillic-500.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const ui = (
  <AppConfigProvider>
    <CalendlyProvider>
      <ColorModeProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeProvider>
    </CalendlyProvider>
  </AppConfigProvider>
);
const app = process.env.NODE_ENV === 'development' ? <React.StrictMode>{ui}</React.StrictMode> : ui;

root.render(app);
