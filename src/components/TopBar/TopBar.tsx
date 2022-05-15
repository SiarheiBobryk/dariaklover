import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

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
import ListItemIcon from '@mui/material/ListItemIcon';
import useMediaQuery from '@mui/material/useMediaQuery';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { ColorModeContext, ColorModeContextValue } from '../../providers/ColorModeProvider';
import FourLeafCloverIcon from '../../icons/FourLeafClover';

import bookingMetaData from '../../pages/Booking/bookingMetaData';
import aboutMetaData from '../../pages/About/aboutMetaData';
import questionsMetaData from '../../pages/Questions/questionsMetaData';
import referencesMetaData from '../../pages/References/referencesMetaData';

export interface Page {
  to: string;
  label: string;
  icon: React.ReactNode;
}

export const pages: Page[] = [
  {
    to: bookingMetaData.path,
    label: 'Записаться',
    icon: <CalendarMonthIcon />,
  },
  {
    to: aboutMetaData.path,
    label: 'Обо мне',
    icon: <PersonOutlineIcon />,
  },
  {
    to: questionsMetaData.path,
    label: 'Задать вопрос',
    icon: <QuestionAnswerIcon />,
  },
  {
    to: referencesMetaData.path,
    label: 'Отзывы',
    icon: <MenuBookIcon />,
  },
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
  to: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  label: string;
  endIcon: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavButton = React.forwardRef(function NavButton(props: NavButtonProps, ref: React.Ref<any>) {
  const { to, children, size = 'medium', label, variant = 'text', color = 'inherit', ...other } = props;

  return (
    <Button
      to={to}
      component={RouterNavLinkMod}
      size={size}
      variant={variant}
      color={color}
      ref={ref}
      aria-label={label}
      {...other}
    >
      {children}
    </Button>
  );
});

export interface TopBarProps {
  ColorSwitcherButtonProps?: {
    'data-testid'?: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TopBar = React.forwardRef(function TopBar(props: TopBarProps, ref: React.Ref<any>) {
  const { ColorSwitcherButtonProps } = props;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const theme: Theme = useTheme();
  const isMedium: boolean = useMediaQuery(theme.breakpoints.up('md'));

  const colorMode: ColorModeContextValue = React.useContext(ColorModeContext);

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

  const buttonSize = React.useMemo(
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

  const [bookingPage, ...otherPages] = pages;

  return (
    <AppBar position="static" color="default" ref={ref}>
      <Toolbar sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }} variant={toolbarVariant}>
        {/* The application logo */}
        <Link
          component={RouterNavLink}
          to="/"
          sx={{ display: 'flex', alignContent: 'center', mb: 0 }}
          aria-label="Вернуться на главную"
        >
          <FourLeafCloverIcon fontSize={logoFontSize} />
        </Link>

        {/* App menu items */}
        <Box sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
          {/* The color mode switcher */}
          <IconButton
            onClick={colorMode?.toggleColorCallback}
            color="inherit"
            aria-label="Переключить цветовую тему"
            size={buttonSize}
            {...ColorSwitcherButtonProps}
          >
            {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <NavButton
            to={bookingPage.to}
            variant="outlined"
            color="primary"
            endIcon={bookingPage.icon}
            size={buttonSize}
            label={bookingPage.label}
          >
            Записаться
          </NavButton>
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
              onClick={handleCloseNavMenu}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {otherPages.map(({ to, label, icon }) => {
                return (
                  <MenuItem to={to} component={RouterNavLink} key={to} aria-label={label} dense>
                    <ListItemIcon>{icon}</ListItemIcon>
                    {label}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Pages list for medium screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
            {otherPages.map(({ to, label, icon }) => {
              return (
                <NavButton key={to} to={to} size={buttonSize} label={label} endIcon={icon}>
                  {label}
                </NavButton>
              );
            })}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
});

export default TopBar;
