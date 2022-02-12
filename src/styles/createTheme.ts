import { PaletteMode } from '@mui/material';
import { createTheme as createThemeMui, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles';

import createThemeOptions from './createThemeOptions';

/**
 * The result of this function running should be memozed in order to avoid performance issues
 * For example:
 *
 * const theme: Theme = React.useMemo(() => {
 *   return createTheme(mode); //
 * }, [mode]);
 */
function createTheme(mode: PaletteMode): Theme {
  const themeOptions: ThemeOptions = createThemeOptions(mode);
  const theme: Theme = createThemeMui(themeOptions);
  return responsiveFontSizes(theme);
}

export default createTheme;
