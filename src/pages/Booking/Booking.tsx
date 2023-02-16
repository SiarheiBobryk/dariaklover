import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import BookingCard from '../../components/BookingCard';
import bookingMetaData from './bookingMetaData';
import Heading from '../../components/Heading';
import howToBookMetaData from '../HowToBook/howToBookMetaData';
import Paragraph from '../../components/Paragraph';
import helpMetaData from '../Help/helpMetaData';

function References() {
  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <Heading>{bookingMetaData.heading}</Heading>
      <Paragraph>На данный момент доступны следующие виды консультаций: </Paragraph>
      <Grid container spacing={1} sx={{ marginBottom: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          {/* TODO: Keep it up-to-date with the Calendly event */}
          {/* TODO: Use the Calendly API here */}
          <BookingCard
            title="Установочная встреча"
            duration={30}
            via="Google Meet"
            href="https://calendly.com/dariaklover/regular"
          >
            <Typography variant="body2" color="text.secondary">
              Работа с запросом клиента в формате коучинга.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Знакомство, выяснение запросов, предложение по дальнейшей работе. Без оплаты.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              После записи вам на email будет отправлена анкета, которая понадобится для первой встречи.
            </Typography>
          </BookingCard>
        </Grid>
      </Grid>
      <Alert severity="warning">
        <AlertTitle>Пропуск запланированной встречи</AlertTitle>
        Если вы не можете прийти на запланированную встречу, отмените или перенесите ее на другой день не менее чем за
        24 ч. Если вы записались, но не явились на встречу, вы автоматически теряете возможность записи к Дарье в
        последующем.
      </Alert>
      <Paragraph>
        Система записи на консультацию находится на стороннем сервисе, который очень простой и понятный, однако этот
        сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень постарались перевести на русский
        язык все элементы на страничках, но, к сожалению, на данный момент технически не возможно предоставить 100%
        русскую версию.
      </Paragraph>
      <Alert severity="info">
        <AlertTitle>{howToBookMetaData.heading}</AlertTitle>
        Если вам нужна помощь в том, как записаться на консультацию, пожалуйста, воспользуйтесь инструкцией{' '}
        <Link component={RouterNavLink} to={howToBookMetaData.path}>
          {howToBookMetaData.heading}
        </Link>
        .
      </Alert>
      <Alert severity="info">
        <AlertTitle>Помощь в записи</AlertTitle>
        {}
        Если у вас остались вопросы или вы продолжаете испытывать сложности в записи на консультацию, посетите раздел{' '}
        <Link component={RouterNavLink} to={helpMetaData.path}>
          {helpMetaData.heading}
        </Link>
      </Alert>
    </>
  );
}

export default References;
