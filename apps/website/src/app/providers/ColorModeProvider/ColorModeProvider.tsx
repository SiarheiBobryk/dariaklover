import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { ColorModeContextValue, Config } from '@dariaklover/types';
import { PaletteMode } from '@mui/material';

import { AppConfigContext } from '../AppConfigProvider';

export interface ColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'light',
  toggleColorCallback(this: void): void {},
});

function ColorModeProvider(props: ColorModeProviderProps) {
  const { children } = props;

  const { colorModeDefault }: Config = useContext(AppConfigContext);
  const colorModeInit: PaletteMode = (localStorage.getItem('colorMode') as PaletteMode) ?? colorModeDefault;
  const [mode, setMode] = useState<PaletteMode>(colorModeInit);
  useEffect(
    function backupColorMode() {
      localStorage.setItem('colorMode', mode);
    },
    [mode],
  );

  const colorMode: ColorModeContextValue = useMemo(
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
