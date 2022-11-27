import * as React from 'react';

import { PaletteMode } from '@mui/material';

import { act, render } from '@testing-library/react';

import ColorModeProvider, { ColorModeContext, ColorModeContextValue } from './ColorModeProvider';
import { config } from '../AppConfigProvider';

afterEach(() => {
  localStorage.clear();
});

describe('ColorModeProvider', () => {
  describe('The `colorMode` object inspection', () => {
    it('should trigger to the right color mode', async () => {
      // TODO: Add types for the same variables
      let mode: PaletteMode | undefined;
      // TODO: Is there a way to do the same but without the arrow symbol 🤔
      let switchColor: (this: void) => void | undefined;

      render(
        <ColorModeProvider>
          <ColorModeContext.Consumer>
            {function colorModeContext(value: ColorModeContextValue) {
              mode = value.mode;
              switchColor = value.toggleColorCallback;
              return <div />;
            }}
          </ColorModeContext.Consumer>
        </ColorModeProvider>,
      );

      expect(mode).toEqual(config.colorModeDefault);
      await act(() => {
        switchColor();
      });
      expect(mode).toEqual('dark');

      await act(() => {
        switchColor();
      });
      expect(mode).toEqual('light');

      await act(() => {
        switchColor();
        switchColor();
      });
      expect(mode).toEqual('light');
    });
  });

  it('should backup and recover `colorMode` variable in localStorage', async () => {
    let switchColor: (this: void) => void | undefined;
    let mode: PaletteMode | undefined;

    const { rerender } = render(
      <ColorModeProvider>
        <ColorModeContext.Consumer>
          {function colorModeContext(value: ColorModeContextValue) {
            mode = value.mode;
            switchColor = value.toggleColorCallback;
            return <div />;
          }}
        </ColorModeContext.Consumer>
      </ColorModeProvider>,
    );

    expect(mode).toBe(config.colorModeDefault);

    await act(() => {
      switchColor();
    });
    expect(mode).toBe('dark');

    rerender(
      <ColorModeProvider>
        <ColorModeContext.Consumer>
          {function colorModeContext(value: ColorModeContextValue) {
            mode = value.mode;
            switchColor = value.toggleColorCallback;
            return <div />;
          }}
        </ColorModeContext.Consumer>
      </ColorModeProvider>,
    );
    expect(mode).toBe('dark');

    await act(() => {
      switchColor();
    });
    expect(mode).toBe('light');

    rerender(
      <ColorModeProvider>
        <ColorModeContext.Consumer>
          {function colorModeContext(value: ColorModeContextValue) {
            mode = value.mode;
            switchColor = value.toggleColorCallback;
            return <div />;
          }}
        </ColorModeContext.Consumer>
      </ColorModeProvider>,
    );
    expect(mode).toBe('light');

    await act(() => {
      switchColor();
      switchColor();
      switchColor();
      switchColor();
      switchColor();
      switchColor();
      switchColor();
      switchColor();
      switchColor();
    });
    rerender(
      <ColorModeProvider>
        <ColorModeContext.Consumer>
          {function colorModeContext(value: ColorModeContextValue) {
            mode = value.mode;
            switchColor = value.toggleColorCallback;
            return <div />;
          }}
        </ColorModeContext.Consumer>
      </ColorModeProvider>,
    );
    expect(mode).toBe('dark');
  });
});
