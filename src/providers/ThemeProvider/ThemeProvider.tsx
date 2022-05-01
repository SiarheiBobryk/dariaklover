import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeProviderMui, Theme } from '@mui/material/styles';

import { createTheme } from '../../styles';
import { ColorModeContext, ColorModeContextValue } from '../ColorModeProvider/ColorModeProvider';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { mode }: ColorModeContextValue = React.useContext(ColorModeContext);

  const theme: Theme = React.useMemo(
    function memoizeCreateTheme() {
      return createTheme(mode);
    },
    [mode],
  );

  return (
    <ThemeProviderMui theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMui>
  );
}

export default ThemeProvider;
