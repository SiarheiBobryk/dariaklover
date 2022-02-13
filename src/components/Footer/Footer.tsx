import * as React from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
      <Box>
        <IconButton
          aria-label="Инстаграм Дарьи"
          href="https://www.instagram.com/daria.klover"
          rel="noopener"
          target="_blank"
          color="inherit"
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="Телеграм Дарьи"
          href="https://t.me/dariaklover"
          rel="noopener"
          target="_blank"
          color="inherit"
        >
          <TelegramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        Дарья Кловер {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

export default Footer;
