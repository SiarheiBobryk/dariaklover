import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { ReactComponent as Logo } from '../../images/logo.svg';

function FourLeafClover(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <Logo />
    </SvgIcon>
  );
}

function TopBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <FourLeafClover sx={{ fontSize: 32 }} />
          {/* Right block */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Typography variant="h6">Главная</Typography>
            <Typography variant="h6">Архив</Typography>
            <Typography variant="h6">Обо мне</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
