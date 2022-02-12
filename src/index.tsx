import * as React from 'react';
import ReactDOM from 'react-dom';

import AppConfigProvider from './providers/AppConfigProvider';
import ColorModeProvider from './providers/ColorModeProvider';
import ThemeProvider from './providers/ThemeProvider';

import App from './App';

// TODO: Figure out maybe we don't need all these font variants 🤔
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.render(
  <AppConfigProvider>
    <ColorModeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ColorModeProvider>
  </AppConfigProvider>,
  document.querySelector('#root'),
);
