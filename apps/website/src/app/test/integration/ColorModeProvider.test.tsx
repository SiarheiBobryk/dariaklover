import * as React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import { ColorModeContextValue } from '@dariaklover/types';
import { PaletteMode } from '@mui/material';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Head from '../../components/Head';
import TopBar from '../../components/TopBar';
import AppConfigProvider, { config } from '../../providers/AppConfigProvider';
import ColorModeProvider, { ColorModeContext } from '../../providers/ColorModeProvider';
import ThemeProvider from '../../providers/ThemeProvider';

afterEach(() => {
  localStorage.clear();
});

describe('ColorModeProvider/`TopBar` integration', () => {
  it('should produce the right values in `ColorModeContext`', async () => {
    const user = userEvent.setup();
    let mode: PaletteMode | undefined;
    render(
      <ColorModeProvider>
        <BrowserRouter>
          <ColorModeContext.Consumer>
            {function colorModeContext(value: ColorModeContextValue) {
              mode = value.mode;
              return <TopBar ColorSwitcherButtonProps={{ 'data-testid': 'colorSwitcher' }} />;
            }}
          </ColorModeContext.Consumer>
        </BrowserRouter>
      </ColorModeProvider>,
    );
    const colorSwitcher: HTMLButtonElement = screen.getByTestId('colorSwitcher');
    expect(mode).toBe(config.colorModeDefault);
    await act(async () => {
      await user.click(colorSwitcher as Element);
    });
    expect(mode).toBe('dark');
    await act(async () => {
      await user.click(colorSwitcher as Element);
    });
    expect(mode).toBe('light');
    await act(async () => {
      await user.click(colorSwitcher as Element);
      await user.click(colorSwitcher as Element);
    });
    expect(mode).toBe('light');
    await act(async () => {
      await user.click(colorSwitcher as Element);
      await user.click(colorSwitcher as Element);
      await user.click(colorSwitcher as Element);
    });
    expect(mode).toBe('dark');
  });
  it('should have the right content in the `theme-color` HTML meta tag', async () => {
    const user = userEvent.setup();
    function getThemeColorData(): HTMLMetaElement | undefined {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      return Helmet.peek().metaTags.find(function findThemeColor(tag: HTMLMetaElement) {
        const { name } = tag;
        return name === 'theme-color';
      });
    }
    render(
      <AppConfigProvider>
        <ColorModeProvider>
          <ThemeProvider>
            <BrowserRouter>
              <>
                <Head />
                <TopBar ColorSwitcherButtonProps={{ 'data-testid': 'colorSwitcher' }} />
              </>
            </BrowserRouter>
          </ThemeProvider>
        </ColorModeProvider>
      </AppConfigProvider>,
    );
    const colorSwitcher: HTMLButtonElement = screen.getByTestId('colorSwitcher');
    let themeColorLight = getThemeColorData();
    expect(themeColorLight?.content).toBe(config.themeColor.light);
    await act(async () => {
      await user.click(colorSwitcher as Element);
    });
    let themeColorDark = getThemeColorData();
    expect(themeColorDark?.content).toBe(config.themeColor.dark);
    await act(async () => {
      await user.click(colorSwitcher as Element);
      await user.click(colorSwitcher as Element);
    });
    themeColorDark = getThemeColorData();
    expect(themeColorDark?.content).toBe(config.themeColor.dark);
    await act(async () => {
      await user.click(colorSwitcher as Element);
      await user.click(colorSwitcher as Element);
      await user.click(colorSwitcher as Element);
    });
    themeColorLight = getThemeColorData();
    expect(themeColorLight?.content).toBe(config.themeColor.light);
  });
});
