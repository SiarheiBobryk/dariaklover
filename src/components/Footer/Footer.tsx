import * as React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import packageJson from '../../../package.json';

export const iconButtonA11yProps = {
  rel: 'noopener',
  target: '_blank',
};

interface FooterProps {
  // TODO: Add `data-testid` for all components
  'data-testid'?: string;
}

function Footer(props: FooterProps) {
  const {
    instagram: { href: instagramHref, label: instagramLabel },
    telegram: { href: telegramHref, label: telegramLabel },
    calendly: { href: calendlyHref, label: calendlyLabel },
    fullName,
    github,
    email,
  }: Config = React.useContext(AppConfigContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, marginBottom: 1 }} {...props}>
      <Box>
        <Tooltip title="Instagram">
          <IconButton aria-label={instagramLabel} href={instagramHref} color="inherit" {...iconButtonA11yProps}>
            <InstagramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Telegram">
          <IconButton aria-label={telegramLabel} href={telegramHref} color="inherit" {...iconButtonA11yProps}>
            <TelegramIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="WhatsApp">
          {/* TODO: Add ids and links here */}
          <span>
            <IconButton
              aria-label="TODO: add aria-label"
              href="TODO: add href here"
              color="inherit"
              disabled
              {...iconButtonA11yProps}
            >
              <WhatsAppIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Электронная почта">
          <IconButton
            aria-label="Электронный адрес Дарьи"
            href={`mailto:  ${email}`}
            color="inherit"
            {...iconButtonA11yProps}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Календарь">
          <IconButton aria-label={calendlyLabel} href={calendlyHref} color="inherit" {...iconButtonA11yProps}>
            <CalendarMonthIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {fullName} {new Date().getFullYear()}
      </Typography>
      <Tooltip title="Техническая информация о последнем обновлении">
        <Link variant="body2" color="text.secondary" href={`${github}/releases/tag/v${packageJson.version}`}>
          {`v${packageJson.version}`}
        </Link>
      </Tooltip>
    </Box>
  );
}

export default Footer;
