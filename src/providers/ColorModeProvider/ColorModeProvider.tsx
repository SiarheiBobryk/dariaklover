import * as React from 'react';

import { PaletteMode } from '@mui/material';

import { AppConfigContext } from '../AppConfigProvider';

export interface ColorModeContextValue {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext<ColorModeContextValue>({
  mode: 'light',
  toggleColorMode: () => {},
});

function ColorModeProvider(props: ColorModeProviderProps) {
  const { children } = props;

  const appConfig = React.useContext(AppConfigContext);
  const [mode, setMode] = React.useState<PaletteMode>(appConfig.colorModeDefault);
  const colorMode: ColorModeContextValue = React.useMemo(() => {
    return {
      // The dark mode switch would invoke this method
      toggleColorMode: (): void => {
        setMode((prevMode: PaletteMode): PaletteMode => {
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
      mode,
    };
  }, [mode]);

  return <ColorModeContext.Provider value={colorMode}>{children}</ColorModeContext.Provider>;
}

export default ColorModeProvider;
