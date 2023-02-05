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
      <Alert severity="warning">
        <AlertTitle>Запись новых клиентов приостановлена</AlertTitle>В связи с переездом в другую страну, сейчас мы
        активно работаем над восстановлением возможности снова принимать электронные платежи. Поэтому запись новых
        клиентов временно приостановлена. Как только платежи будут доступны, мы разместим об этом новость на главной
        странице сайта. Спасибо за понимание.
      </Alert>
      <Paragraph>На данный момент доступны следующие виды консультаций: </Paragraph>
      <Grid container spacing={1} sx={{ marginBottom: 1 }}>
        <Grid item xs={12} sm={6} md={4}>
          {/* TODO: Keep it up-to-date with the Calendly event */}
          <BookingCard
            title="Heath-коучинг сессия"
            duration={60}
            via="Google Meet"
            href="https://calendly.com/dariaklover/regular"
          >
            <Typography variant="body2" color="text.secondary">
              Работа с запросом клиента в формате коучинга
            </Typography>
          </BookingCard>
        </Grid>
      </Grid>
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
