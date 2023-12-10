import {
  MouseEvent,
  CSSProperties,
  ReactElement,
  ReactNode,
  Ref,
  forwardRef,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { ColorModeContextValue } from '@dariaklover/types';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import FourLeafCloverIcon from '../../icons/FourLeafClover';
import aboutMetaData from '../../pages/About/aboutMetaData';
import articlesMetaData from '../../pages/Articles/articlesMetaData';
import bookingMetaData from '../../pages/Booking/bookingMetaData';
import helpMetaData from '../../pages/Help/helpMetaData';
import pricingMetaData from '../../pages/Pricing/pricingMetaData';
import referencesMetaData from '../../pages/References/referencesMetaData';
import { ColorModeContext } from '../../providers/ColorModeProvider';
import News from '../News';

export interface Page {
  to: string;
  label: string;
  icon: ReactNode;
}

export const pages: Array<Page> = [
  {
    to: bookingMetaData.path,
    label: 'Записаться',
    icon: <CalendarMonthIcon />,
  },
  {
    to: pricingMetaData.path,
    label: 'Услуги',
    icon: <ShoppingBagIcon />,
  },
  {
    to: articlesMetaData.path,
    label: 'Публикации',
    icon: <ArticleIcon />,
  },
  {
    to: aboutMetaData.path,
    label: 'Обо мне',
    icon: <PersonIcon />,
  },
  {
    to: referencesMetaData.path,
    label: 'Отзывы',
    icon: <MenuBookIcon />,
  },
  {
    to: helpMetaData.path,
    label: 'Помощь',
    icon: <HelpIcon />,
  },
];

export interface RouterNavLinkProps {
  children: ReactElement;
  to: string;
}

export interface StyleCallbackParams {
  isActive: boolean;
}

// TODO: Move it to a separate component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RouterNavLinkMod = forwardRef(function RouterNavLinkMod(props: RouterNavLinkProps, ref: Ref<any>) {
  const { children, to, ...other } = props;
  const theme: Theme = useTheme();

  const styleCallback = useCallback(
    function styleCallback({ isActive }: StyleCallbackParams): CSSProperties {
      const activeStyle: CSSProperties = {
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
  children: ReactNode;
  label: string;
  endIcon: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NavButton = forwardRef(function NavButton(props: NavButtonProps, ref: Ref<any>) {
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
const TopBar = forwardRef(function TopBar(props: TopBarProps, ref: Ref<any>) {
  const { ColorSwitcherButtonProps } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const theme: Theme = useTheme();
  const isLarge: boolean = useMediaQuery(theme.breakpoints.up('lg'));

  const colorMode: ColorModeContextValue = useContext(ColorModeContext);

  const handleOpenNavMenu = useCallback(function handleOpenNavMenu(event: MouseEvent<HTMLElement>): void {
    setAnchorElNav(event.currentTarget);
  }, []);

  const handleCloseNavMenu = useCallback(function handleCloseNavMenu(): void {
    setAnchorElNav(null);
  }, []);

  const toolbarVariant = useMemo(
    function memoizeVariant(): 'regular' | 'dense' {
      return isLarge ? 'regular' : 'dense';
    },
    [isLarge],
  );

  const buttonSize = useMemo(
    function memoizeSize(): 'medium' | 'small' {
      return isLarge ? 'medium' : 'small';
    },
    [isLarge],
  );

  const logoFontSize = useMemo(
    function memoizeFontSize(): 'large' | 'medium' {
      return isLarge ? 'large' : 'medium';
    },
    [isLarge],
  );

  const [bookingPage, ...otherPages] = pages;

  return (
    <AppBar position="static" color="default" ref={ref}>
      <Toolbar sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }} variant={toolbarVariant}>
        {/* The application logo */}
        <Tooltip title="Главная страница">
          <Link
            component={RouterNavLink}
            to="/"
            sx={{ display: 'flex', alignContent: 'center', mb: 0 }}
            aria-label="Вернуться на главную"
          >
            <FourLeafCloverIcon fontSize={logoFontSize} />
          </Link>
        </Tooltip>

        {/* App menu items */}
        <Box sx={{ display: 'flex', alignContent: 'center', gap: 1 }}>
          <News />
          {/* The color mode switcher */}
          <Tooltip title="Переключить цветовую тему">
            <IconButton
              onClick={colorMode?.toggleColorCallback}
              color="inherit"
              aria-label="Переключить цветовую тему"
              size={buttonSize}
              {...ColorSwitcherButtonProps}
            >
              {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
          <NavButton
            to={bookingPage?.to ?? ''}
            variant="outlined"
            color="inherit"
            endIcon={bookingPage?.icon}
            size={buttonSize}
            label={bookingPage?.label ?? ''}
          >
            Запись
          </NavButton>
          {/* Pages menu for small screens */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
            >
              {otherPages.map(function mapOtherPagesSmScreens({ to, label, icon }) {
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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {otherPages.map(function mapOtherPagesMdScreens({ to, label, icon }) {
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
