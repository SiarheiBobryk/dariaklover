import * as React from 'react';
import { NavLink as RouterNavLink, useLocation, Location } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Link from '@mui/material/Link';
import { Theme, useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

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

export interface RouterNavLinkProps {
  children: React.ReactElement;
  to: string;
}

export interface StyleCallbackParams {
  isActive: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RouterNavLinkMod = React.forwardRef(function RouterNavLinkMod(props: RouterNavLinkProps, ref: React.Ref<any>) {
  const { children, to, ...other } = props;
  const theme: Theme = useTheme();

  const styleCallback = React.useCallback(
    function styleCallback({ isActive }: StyleCallbackParams): React.CSSProperties {
      const activeStyle: React.CSSProperties = {
        backgroundColor: theme.palette.action.selected,
      };
      return isActive ? activeStyle : {};
    },
    [theme],
  );

  return (
    <RouterNavLink ref={ref} to={to} style={styleCallback} {...other}>
      {children}
    </RouterNavLink>
  );
});

export interface NavButtonProps {
  pathname: string;
  to: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavButton = React.forwardRef(function NavButton(props: NavButtonProps, ref: React.Ref<any>) {
  const { pathname, to, children, size = 'medium', ...other } = props;

  return (
    <Button to={to} component={RouterNavLinkMod} size={size} variant="text" color="inherit" ref={ref} {...other}>
      {children}
    </Button>
  );
});

export interface TopBarProps {
  ColorSwitcherButtonProps?: {
    'data-testid'?: string;
  };
}

function TopBar(props: TopBarProps) {
  const { ColorSwitcherButtonProps } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const theme: Theme = useTheme();
  const isMedium: boolean = useMediaQuery(theme.breakpoints.up('md'));

  const colorMode: ColorModeContextValue = React.useContext(ColorModeContext);
  const { pathname }: Location = useLocation();

  const handleOpenNavMenu = React.useCallback(function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>): void {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = React.useCallback(function handleCloseNavMenu(): void {
    setAnchorElNav(null);
  }, []);

  const toolbarVariant = React.useMemo(
    function memoizeVariant(): 'regular' | 'dense' {
      return isMedium ? 'regular' : 'dense';
    },
    [isMedium],
  );

  const navButtonSize = React.useMemo(
    function memoizeSize(): 'medium' | 'small' {
      return isMedium ? 'medium' : 'small';
    },
    [isMedium],
  );

  const logoFontSize = React.useMemo(
    function memoizeFontSize(): 'large' | 'medium' {
      return isMedium ? 'large' : 'medium';
    },
    [isMedium],
  );

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }} variant={toolbarVariant}>
        {/* The application logo */}
        <Link component={RouterNavLink} to="/" sx={{ display: 'flex', alignContent: 'center', mb: 0 }}>
          <FourLeafClover fontSize={logoFontSize} />
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
              size="small"
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
                  // FIXME: Keyboard navigation is broken here
                  <MenuItem key={to} onClick={handleCloseNavMenu} dense>
                    <NavButton to={to} pathname={pathname} size="small">
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
                <NavButton key={to} to={to} pathname={pathname} size={navButtonSize}>
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
