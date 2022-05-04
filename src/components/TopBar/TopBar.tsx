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

interface NavButtonProps {
  pathname: string;
  to: string;
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavButton = React.forwardRef(function NavButton(props: NavButtonProps, ref: React.Ref<any>) {
  const { pathname, to, children } = props;
  const theme = useTheme();

  return (
    <Button
      sx={{
        ...(pathname === to && { backgroundColor: theme.palette.action.selected }),
      }}
      to={to}
      component={RouterLink}
      variant="text"
      color="inherit"
      ref={ref}
    >
      {children}
    </Button>
  );
});

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
        <Link component={RouterLink} to="/" sx={{ display: 'flex', alignContent: 'center', mb: 0 }}>
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
                    <NavButton to={to} pathname={pathname}>
                      {label}
                    </NavButton>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Pages list for medium screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            {pages.map(({ to, label }) => {
              return (
                <NavButton key={to} to={to} pathname={pathname}>
                  {label}
                </NavButton>
              );
            })}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
