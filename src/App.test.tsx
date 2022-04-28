import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render, RenderResult } from '@testing-library/react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Helmet, HelmetPropsToState } from 'react-helmet';
import App from './App';
import AppConfigProvider, { config } from './providers/AppConfigProvider';
import ColorModeProvider from './providers/ColorModeProvider';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider';

expect.extend(toHaveNoViolations);

describe('<App />', () => {
  describe('Essential tags of `head` inspection', () => {
    it('should have the right title', () => {
      render(
        <AppConfigProvider>
          <ColorModeProvider>
            <ThemeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </ColorModeProvider>
        </AppConfigProvider>,
      );

      const { title }: HelmetPropsToState = Helmet.peek();
      expect(title).toBe(undefined); // The children of `App` set `title`
    });

    it('should have the right description', () => {
      render(
        <AppConfigProvider>
          <ColorModeProvider>
            <ThemeProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </ColorModeProvider>
        </AppConfigProvider>,
      );

      const { metaTags }: HelmetPropsToState = Helmet.peek();
      const description = metaTags.find(function find({ name }) {
        return name === 'description';
      });
      expect(description?.content).toBe(config.description);
    });
  });
});
