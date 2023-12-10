import { ReactNode, useContext, useMemo } from 'react';

import { ColorModeContextValue } from '@dariaklover/types';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeProviderMui, Theme } from '@mui/material/styles';

import { createTheme } from '../../styles';
import { ColorModeContext } from '../ColorModeProvider/ColorModeProvider';

export interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const { mode }: ColorModeContextValue = useContext(ColorModeContext);

  const theme: Theme = useMemo(
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
