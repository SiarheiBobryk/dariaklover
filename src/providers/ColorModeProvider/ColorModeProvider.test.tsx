import * as React from 'react';

import { PaletteMode } from '@mui/material';

import { act, render } from '@testing-library/react';

import ColorModeProvider, { ColorModeContext, ColorModeContextValue } from './ColorModeProvider';
import { config } from '../AppConfigProvider';

describe('ColorModeProvider', () => {
  describe('The `colorMode` object inspection', () => {
    it('should trigger to the right color mode', () => {
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
});
