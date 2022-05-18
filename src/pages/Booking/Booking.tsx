import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import bookingMetaData from './bookingMetaData';

const calendlyResponceKeys = [
  'assigned_to',
  'event_type_uuid',
  'event_type_name',
  'event_start_time',
  'event_end_time',
  'invitee_uuid',
  'invitee_full_name',
  'invitee_email',
  'text_reminder_number',
];

function References() {
  const {
    calendly: { href: calendlyHref },
  }: Config = React.useContext(AppConfigContext);

  const [searchParams, setSearchParams] = useSearchParams();

  console.info(searchParams.get('assigned_to'));

  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <Heading>{bookingMetaData.heading}</Heading>
      <Paragraph>На данный момент доступны следующие виды консультаций:</Paragraph>
      <List>
        <ListItem>
          <Link href={`${calendlyHref}/trial`}>Ознакомительная встреча</Link>
        </ListItem>
        <ListItem>
          <Link href={`${calendlyHref}/regular`}>Heath-коучинг сессия</Link>
        </ListItem>
      </List>
      <Alert sx={{ my: 1 }} severity="warning">
        <AlertTitle>Система тестируется</AlertTitle>
        Обращаем ваше внимание, что система записи на консультацию находится в режиме тестирования и может быть
        нестабильна.
      </Alert>
      <Alert sx={{ my: 1 }} severity="info">
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
