import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import { AppConfigContext, Config, CalendlyAppointment } from '../../providers/AppConfigProvider';
import bookingMetaData from './bookingMetaData';

/**
 * `invitee_email` is required on Calendly's side
 * If we gonna change it, all required fields from Calendly's side
 * must be reflected to this interface and the logic related
 */
export interface CalendlyResponse {
  assignedTo: string | null;
  eventTypeUuid: string | null;
  eventTypeName: string | null;
  eventStartTime: Date;
  eventEndTime: Date;
  inviteeUuid: string | null;
  inviteeFullName: string | null;
  inviteeEmail?: string | null;
  textReminderNumber: string | null;
}

function References() {
  const {
    calendly: { href: calendlyHref, appointments, conformation },
  }: Config = React.useContext(AppConfigContext);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = React.useCallback(function handleClose() {
    setOpen(false);
  }, []);

  const handleBackdropClick = React.useCallback(
    function handleBackdropClick(_event: Event, reason: string) {
      // Force the user to click on the action button to close the dialog
      if (reason !== 'backdropClick') {
        handleClose();
      }
    },
    [handleClose],
  );

  const [searchParams] = useSearchParams();

  const calendlyResponse: CalendlyResponse = {
    assignedTo: searchParams.get('assigned_to'),
    eventTypeUuid: searchParams.get('event_type_uuid'),
    eventTypeName: searchParams.get('event_type_name'),
    eventStartTime: new Date(searchParams.get('event_start_time') ?? ''),
    eventEndTime: new Date(searchParams.get('event_end_time') ?? ''),
    inviteeUuid: searchParams.get('invitee_uuid'),
    inviteeFullName: searchParams.get('invitee_full_name'),
    inviteeEmail: searchParams.get('invitee_email'),
    textReminderNumber: searchParams.get('text_reminder_number'),
  };

  const { inviteeEmail } = calendlyResponse;

  React.useEffect(
    function handleModalVisibility() {
      // NOTE: `inviteeEmail` is required field for booking an appointment
      setOpen(Boolean(inviteeEmail));
    },
    [inviteeEmail],
  );

  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <Heading>{bookingMetaData.heading}</Heading>
      <Paragraph>На данный момент доступны следующие виды консультаций: </Paragraph>
      <List>
        {appointments.map(function renderAppointments({ id, active, newTab, label }: CalendlyAppointment) {
          const target: React.HTMLAttributeAnchorTarget | undefined = newTab ? '_blank' : undefined;
          return (
            active && (
              <ListItem key={id}>
                <Link href={`${calendlyHref}/${id}`} target={target}>
                  {label}
                </Link>
              </ListItem>
            )
          );
        })}
      </List>
      {conformation && (
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleBackdropClick}
          aria-labelledby="booking-conformation-title"
          disableEscapeKeyDown
        >
          <DialogTitle id="booking-conformation-title">Запись прошла успешно</DialogTitle>
          <DialogContent dividers>
            <Paragraph>
              {calendlyResponse.inviteeFullName}, вы только что успешно записались на &quot;
              {calendlyResponse.eventTypeName}&quot; на {calendlyResponse.eventStartTime.toLocaleDateString()} c{' '}
              {calendlyResponse.eventStartTime.toLocaleTimeString()} до{' '}
              {calendlyResponse.eventEndTime.toLocaleTimeString()}.
            </Paragraph>
            <Paragraph>
              Пожалуйста, проверьте свой email.{' '}
              <strong>Мы прислали вам подтверждение записи со всей необходимой информацией.</strong> Консультация будет
              проходить в Google Meet. Ссылку на консультацию вы также можете найти в том же email. Мы также пришлем вам
              оповещение по email и СМС с напоминанием незадолго до консультации.
            </Paragraph>
            <Paragraph>До скорого 🍀</Paragraph>
            <Alert severity="warning">
              Убедительная просьба, будьте вовремя и сообщите мне за 24 часа, если по каким-то непредвиденным
              обстоятельствам вам нужно консультацию перенести или отменить. Кнопки с моими контактами можно найти в
              самом низу сайта.
            </Alert>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" autoFocus onClick={handleClose}>
              Продолжить
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Alert severity="warning">
        <AlertTitle>Система тестируется</AlertTitle>
        Обращаем ваше внимание, что система записи на консультацию находится в режиме тестирования и может быть
        нестабильна.
      </Alert>
      <Alert severity="info">
        <AlertTitle>Русский язык</AlertTitle>
        Cистема записи на консультацию находится на стороннем сервисе, который очень простой и понятный, однако этот
        сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень постарались перевести на русский
        язык все элементы на страничках, но, к сожалению, на данный момент технически не возможно предоставить 100%
        русскую версию, поэтому мы активно работаем над разработкой простой и понятной инструкции по использованию,
        которая скоро будет опубликована на этой странице. Спасибо за ваше терпение и понимание 😇
      </Alert>
    </>
  );
}

export default References;
