import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { CalendlyUserDto, CalendlyUserEventDto } from '@dariaklover/types';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import BookingCard from '../../components/BookingCard';
import Heading from '../../components/Heading';
import LinkEmail from '../../components/LinkEmail';
import LinkSocial from '../../components/LinkSocial';
import Paragraph from '../../components/Paragraph';
import { CalendlyContext } from '../../providers/CalendlyProvider';
import { getCalendlyEventsActive } from '../../services/calendlyUserService';
import helpMetaData from '../Help/helpMetaData';
import howToBookMetaData from '../HowToBook/howToBookMetaData';

import bookingMetaData from './bookingMetaData';

function Booking() {
  const calendlyUser: CalendlyUserDto = useContext<CalendlyUserDto>(CalendlyContext);
  const [events, setEvents] = useState<Array<CalendlyUserEventDto>>([]);

  useEffect(
    function fetchCalendlyEvents() {
      const controller = new AbortController();
      const { signal } = controller;
      (async function asyncFetchCalendlyEvents() {
        const calendlyEvents: Array<CalendlyUserEventDto> = await getCalendlyEventsActive(calendlyUser.uri, signal);
        setEvents(calendlyEvents);
      })().catch(function catchError(error) {
        // eslint-disable-next-line no-console
        console.error(error);
      });
      return function cleanUpFetch() {
        controller.abort();
      };
    },
    [calendlyUser.uri],
  );

  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <Heading>{bookingMetaData.heading}</Heading>
      {events.length > 0 ? (
        <Grid container spacing={1} sx={{ marginBottom: 1 }}>
          {events.map(function generateEvents(event) {
            return (
              <Grid key={event.uri} item xs={12} sm={6}>
                <BookingCard title={event.name} duration={event.duration} href={event.schedulingUrl} uri={event.uri}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    dangerouslySetInnerHTML={{ __html: event.descriptionHtml }}
                  />
                </BookingCard>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Paragraph>
          К сожалению, на данный момент нет доступных консультаций. Скорее всего это происходит по техническим причинам.
          Например, в этот момент выполняется перенастройка календаря или идет техническое обслуживание. Попробуйте
          открыть эту страницу через несколько минут. Если после этого запись не возобновилась, пожалуйста, сообщите мне
          через <LinkSocial social="instagram" />, <LinkSocial social="telegram" />, <LinkSocial social="whatsapp" />{' '}
          или по <LinkEmail />. Мы обязательно что-нибудь придумаем.
        </Paragraph>
      )}
      <Alert severity="warning" variant="outlined">
        <AlertTitle>Пропуск запланированной встречи</AlertTitle>
        Если вы не можете прийти на запланированную встречу, отмените или перенесите ее на другой день не менее чем за
        24 ч. (см раздел{' '}
        <Link component={RouterNavLink} to={howToBookMetaData.path}>
          {howToBookMetaData.heading}
        </Link>{' '}
        и{' '}
        <Link component={RouterNavLink} to={helpMetaData.path}>
          {helpMetaData.heading}
        </Link>
        ). Если вы записались, но не явились на встречу, вы автоматически теряете возможность записи к Дарье в
        последующем.
      </Alert>
      <Alert severity="info" variant="outlined">
        <AlertTitle>{howToBookMetaData.heading}</AlertTitle>
        Если вам нужна помощь в том, как записаться на консультацию, пожалуйста, воспользуйтесь инструкцией{' '}
        <Link component={RouterNavLink} to={howToBookMetaData.path}>
          {howToBookMetaData.heading}
        </Link>
        .
      </Alert>
    </>
  );
}

export default Booking;
