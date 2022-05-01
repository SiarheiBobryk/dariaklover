import * as React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

import { ColorModeContext, ColorModeContextValue } from '../../providers/ColorModeProvider';
import { FourLeafClover } from '../../icons';

const pages = [
  {
    to: '/',
    label: 'Главная',
  },
  {
    to: '/about',
    label: 'Обо мне',
  },
  // TODO: Uncomment it when we'll have something to archive
  // {
  //   to: '/archive',
  //   label: 'Архив',
  // },
];

interface TopBarProps {
  ColorSwitcherButtonProps?: {
    'data-testid'?: string;
  };
}

function TopBar(props: TopBarProps) {
  const { ColorSwitcherButtonProps } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();

  const colorMode: ColorModeContextValue = React.useContext(ColorModeContext);
  const { pathname } = useLocation();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
        {/* The application logo */}
        <Link component={RouterLink} to="/" sx={{ display: 'flex', alignContent: 'center' }}>
          <FourLeafClover fontSize="large" />
        </Link>

        {/* App menu items */}
        <Box sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
          {/* The color mode switcher */}
          <IconButton onClick={colorMode?.toggleColorCallback} color="inherit" {...ColorSwitcherButtonProps}>
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          {/* Pages menu for small screens */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="Application Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {pages.map(({ to, label }) => {
                return (
                  <MenuItem key={to} onClick={handleCloseNavMenu}>
                    {/* TODO: Encapsulate it */}
                    <Button
                      sx={{
                        ...(pathname === to &&
                          theme.palette.mode === 'light' && {
                            backgroundColor: theme.palette.grey[100],
                          }),
                        ...(pathname === to &&
                          theme.palette.mode === 'dark' && {
                            backgroundColor: theme.palette.grey[900],
                          }),
                      }}
                      key={to}
                      to={to}
                      component={RouterLink}
                      variant="text"
                      color="inherit"
                    >
                      {label}
                    </Button>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Pages list for medium screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            {pages.map(({ to, label }) => {
              return (
                <Button
                  sx={{
                    ...(pathname === to &&
                      theme.palette.mode === 'light' && {
                        backgroundColor: theme.palette.grey[100],
                      }),
                    ...(pathname === to &&
                      theme.palette.mode === 'dark' && {
                        backgroundColor: theme.palette.grey[900],
                      }),
                  }}
                  key={to}
                  to={to}
                  component={RouterLink}
                  variant="text"
                  color="inherit"
                >
                  {label}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
