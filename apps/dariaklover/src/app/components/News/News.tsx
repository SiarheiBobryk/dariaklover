import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Theme, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const newsPosted = '2023-05-18T19:42:00';

export interface NewsProps {}

const News = React.forwardRef(function News(props: NewsProps, ref: React.Ref<HTMLDivElement>) {
  const newsPostedTime: number = new Date(newsPosted).getTime();
  const [newsCheckTime, setNewsCheckTime] = React.useState<number>(0);

  React.useEffect(function retrieveNewsCheckDate() {
    const newsCheckTimePrev = Number(localStorage.getItem('newsCheckTime'));
    if (newsCheckTimePrev) {
      setNewsCheckTime(newsCheckTimePrev);
    }
  }, []);

  const theme: Theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpen = React.useCallback(function handleOpen() {
    const now = Date.now();
    setNewsCheckTime(now);
    localStorage.setItem('newsCheckTime', String(now));
    setOpen(true);
  }, []);

  const handleClose = React.useCallback(function handleClose() {
    setOpen(false);
  }, []);

  return (
    <>
      <Dialog ref={ref} fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="news-dialog-title">
        <DialogTitle id="news-dialog-title">Последние Новости</DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: 0, marginBottom: 0, paddingLeft: '20px' }} component="ul">
            {/* ATTENTION: Updated the "newsPosted" var before posting any news ⚠️ */}
            <li>
              [15 Мая, 2023] Добавлено три новых{' '}
              <RouterNavLink to="/references" onClick={handleClose}>
                отзывa
              </RouterNavLink>{' '}
              от клиентов.
            </li>
            <li>
              [12 Апреля, 2023] Добавлена публикация{' '}
              <RouterNavLink to="/articles/focusingonhealth" onClick={handleClose}>
                &quot;ФОКУС на здоровье: как коучинг может помочь вам достичь цели&quot;
              </RouterNavLink>
              .
            </li>
            <li>
              [19 Марта, 2023] Добавлена расширенная информация об образовании: электронные копии{' '}
              <RouterNavLink to="/certificates" onClick={handleClose}>
                дипломов и сертификатов
              </RouterNavLink>{' '}
              для ознакомления.
            </li>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
      <IconButton aria-label="Новости" onClick={handleOpen} color="inherit">
        {/* SOMEDAY: Show an amount of news here, but not a dot */}
        <Badge badgeContent={1} color="primary" variant="dot" invisible={newsPostedTime < newsCheckTime}>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </>
  );
});

export default News;
