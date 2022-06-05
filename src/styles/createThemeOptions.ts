import { PaletteMode } from '@mui/material';
import { ThemeOptions as ThemeOptionsMui } from '@mui/material/styles';
import { blue, grey, deepOrange } from '@mui/material/colors';

function createThemeOptions(mode: PaletteMode): ThemeOptionsMui {
  return {
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: blue[700],
            },
            secondary: {
              main: deepOrange[200],
            },
          }
        : {
            background: {
              default: grey[900],
              paper: grey[900],
            },
          }),
    },
    components: {
      MuiAlert: {
        defaultProps: {
          sx: { my: 1 },
        },
      },
    },
    // ...typography
  };
}

export default createThemeOptions;
