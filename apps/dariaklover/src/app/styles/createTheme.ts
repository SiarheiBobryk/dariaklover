import { PaletteMode } from '@mui/material';
import { createTheme as createThemeMui, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';

import createThemeOptions from './createThemeOptions';

function createTheme(mode: PaletteMode): Theme {
  const themeOptions: ThemeOptions = createThemeOptions(mode);
  const theme: Theme = createThemeMui(themeOptions);
  return responsiveFontSizes(theme);
}

export default createTheme;
