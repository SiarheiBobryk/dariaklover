import * as React from 'react';

import { PaletteMode } from '@mui/material';
import { act, render } from '@testing-library/react';

import { config } from '../AppConfigProvider';

import ColorModeProvider, { ColorModeContext, ColorModeContextValue } from './ColorModeProvider';

afterEach(() => {
  localStorage.clear();
});

describe('ColorModeProvider', () => {
  describe('The `colorMode` object inspection', () => {
    it('should trigger to the right color mode', () => {
      let mode: PaletteMode | undefined;
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
      act(() => {
        switchColor();
      });
      expect(mode).toEqual('dark');

      act(() => {
        switchColor();
      });
      expect(mode).toEqual('light');

      act(() => {
        switchColor();
        switchColor();
      });
      expect(mode).toEqual('light');
    });
  });

  it('should backup and recover `colorMode` variable in localStorage', () => {
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

    act(() => {
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

    act(() => {
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

    act(() => {
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
