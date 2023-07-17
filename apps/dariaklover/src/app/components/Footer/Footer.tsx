import * as React from 'react';

import { Config } from '@dariaklover/types';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import packageJson from '../../../../../../package.json';
import { AppConfigContext } from '../../providers/AppConfigProvider';

export const iconButtonA11yProps = {
  rel: 'noopener',
  target: '_blank',
};

interface FooterProps {}

function Footer(props: FooterProps) {
  const {
    instagram: { href: instagramHref, label: instagramLabel },
    telegram: { href: telegramHref, label: telegramLabel },
    whatsapp: { href: whatsappHref, label: whatsappLabel },
    calendly: { href: calendlyHref, label: calendlyLabel },
    fullName,
    github,
    email: { id: emailId },
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
          <IconButton aria-label={whatsappLabel} href={whatsappHref} color="inherit" {...iconButtonA11yProps}>
            <WhatsAppIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Электронная почта">
          <IconButton
            aria-label="Электронный адрес Дарьи"
            href={`mailto:  ${emailId}`}
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
