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
import { CalendlyContext } from '../../providers';
import { CalendlyUser, CalendlyUserEventType, getCalendlyEvents } from '../../services/calendlyUserService';

function References() {
  const calendlyUser: CalendlyUser = React.useContext<CalendlyUser>(CalendlyContext);
  const [events, setEvents] = React.useState<Array<CalendlyUserEventType>>([]);

  const fetchCalendlyEvents = React.useCallback(
    async function asyncFetchCalendlyEvents() {
      const calendlyEvents: Array<CalendlyUserEventType> = await getCalendlyEvents(calendlyUser.uri);
      setEvents(calendlyEvents);
    },
    [calendlyUser.uri],
  );

  React.useEffect(() => {
    fetchCalendlyEvents().catch((error) => {
      // eslint-disable-next-line no-console
      return console.error(error);
    });
  }, [fetchCalendlyEvents]);

  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <Heading>{bookingMetaData.heading}</Heading>
      <Paragraph>На данный момент доступны следующие виды консультаций:</Paragraph>
      {/* TODO: Align the cards */}
      <Grid container spacing={1} sx={{ marginBottom: 1 }}>
        {events.map(function generateEvents(event) {
          return (
            <Grid key={event.uri} item xs={12} sm={6}>
              {/* TODO: Remove the Google Meet prop */}
              <BookingCard title={event.name} duration={event.duration} href={event.scheduling_url}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  dangerouslySetInnerHTML={{ __html: event.description_html }}
                />
              </BookingCard>
            </Grid>
          );
        })}
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
