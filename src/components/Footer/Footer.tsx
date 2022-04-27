import * as React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import packageJson from '../../../package.json';

function Footer() {
  const {
    instagram: { href: instagramHref, label: instagramLabel },
    telegram: { href: telegramHref, label: telegramLabel },
    fullName,
  }: Config = React.useContext(AppConfigContext);

  const iconButtonA11yProps = {
    rel: 'noopener',
    target: '_blank',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <Box>
        <IconButton aria-label={instagramLabel} href={instagramHref} color="inherit" {...iconButtonA11yProps}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label={telegramLabel} href={telegramHref} color="inherit" {...iconButtonA11yProps}>
          <TelegramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {fullName} {new Date().getFullYear()}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        v.{packageJson.version}
      </Typography>
    </Box>
  );
}

export default Footer;
