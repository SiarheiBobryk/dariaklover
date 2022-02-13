import { PaletteMode } from '@mui/material';
import {
  PaletteOptions as PaletteOptionsMui,
  SimplePaletteColorOptions as SimplePaletteColorOptionsMui,
  ThemeOptions as ThemeOptionsMui,
} from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

export interface PaletteOptions extends PaletteOptionsMui {
  primary: SimplePaletteColorOptionsMui; // TODO: Make it required once we have a custom palette
}

export interface ThemeOptions extends ThemeOptionsMui {
  palette: PaletteOptions;
}

function createThemeOptions(mode: PaletteMode): ThemeOptions {
  return {
    palette: {
      mode,
      primary: {
        main: deepOrange[200],
      },
    },
    components: {
      MuiTypography: {
        defaultProps: {
          gutterBottom: true,
        },
      },
    },
    // ...typography
  };
}

export default createThemeOptions;
