import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { PaletteMode } from '@mui/material';

import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ColorModeProvider, { ColorModeContext, ColorModeContextValue } from '../../providers/ColorModeProvider';
import TopBar from '../../components/TopBar';
import { config } from '../../providers/AppConfigProvider';

describe('ColorModeProvider integration', () => {
  it('should interact with `TopBar`', async () => {
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
    await user.click(colorSwitcher as Element);
    expect(mode).toBe('dark');
    await user.click(colorSwitcher as Element);
    expect(mode).toBe('light');
    await user.click(colorSwitcher as Element);
    await user.click(colorSwitcher as Element);
    expect(mode).toBe('light');
    await user.click(colorSwitcher as Element);
    await user.click(colorSwitcher as Element);
    await user.click(colorSwitcher as Element);
    expect(mode).toBe('dark');
  });
});
