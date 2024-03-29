import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import AppConfigProvider from './app/providers/AppConfigProvider';
import CalendlyProvider from './app/providers/CalendlyProvider';
import ColorModeProvider from './app/providers/ColorModeProvider';
import MDXProvider from './app/providers/MDXProvider';
import ThemeProvider from './app/providers/ThemeProvider';

import '@fontsource/roboto/cyrillic-400.css';
import '@fontsource/roboto/cyrillic-500.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const app = (
  <StrictMode>
    <AppConfigProvider>
      <CalendlyProvider>
        <ColorModeProvider>
          <ThemeProvider>
            <BrowserRouter>
              <MDXProvider>
                <App />
              </MDXProvider>
            </BrowserRouter>
          </ThemeProvider>
        </ColorModeProvider>
      </CalendlyProvider>
    </AppConfigProvider>
  </StrictMode>
);

root.render(app);
