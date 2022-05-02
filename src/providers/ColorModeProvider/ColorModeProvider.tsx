import * as React from 'react';

import { PaletteMode } from '@mui/material';

import { AppConfigContext, Config } from '../AppConfigProvider';

export interface ColorModeContextValue {
  mode: PaletteMode;
  toggleColorCallback(this: void): void;
}

export interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<ColorModeContextValue>({
  mode: 'light',
  toggleColorCallback(this: void): void {},
});

function ColorModeProvider(props: ColorModeProviderProps) {
  const { children } = props;

  const { colorModeDefault }: Config = React.useContext(AppConfigContext);
  const colorModeInit: PaletteMode = (localStorage.getItem('colorMode') as PaletteMode) ?? colorModeDefault;
  const [mode, setMode] = React.useState<PaletteMode>(colorModeInit);
  React.useEffect(
    function backupColorMode() {
      localStorage.setItem('colorMode', mode);
    },
    [mode],
  );

  const colorMode: ColorModeContextValue = React.useMemo(
    function memoizeColorMode() {
      return {
        toggleColorCallback(this: void): void {
          setMode(function switchMode(prevMode: PaletteMode): PaletteMode {
            return prevMode === 'light' ? 'dark' : 'light';
          });
        },
        mode,
      };
    },
    [mode],
  );

  return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
}

export default ColorModeProvider;
