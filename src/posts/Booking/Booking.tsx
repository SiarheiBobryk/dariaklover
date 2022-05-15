import * as React from 'react';

import Link from '@mui/material/Link';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';

export interface BookingProps {
  heading?: string;
}

function Booking(props: BookingProps) {
  const { heading } = props;
  const {
    calendly: { label: calendlyLabel, href: calendlyHref },
  }: Config = React.useContext(AppConfigContext);
  const [openInfo, setOpenInfo] = React.useState(true);

  return (
    <>
      <Heading>{heading}</Heading>
      <Paragraph>
        Используйте{' '}
        <Link sx={{ textTransform: 'lowercase' }} href={calendlyHref} target="_blank">
          {calendlyLabel} <OpenInNewIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
        </Link>{' '}
        для ознакомления с расписанием и для записи на консультацию.
      </Paragraph>
      <Collapse in={openInfo}>
        <Alert
          severity="info"
          action={
            <IconButton
              aria-label="Закрыть"
              color="inherit"
              onClick={() => {
                setOpenInfo(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>Маленькое объявление</AlertTitle>
          Календарь Дарьи находится на стороннем сервисе Calendly, который очень простой и понятный. В то же время, к
          сожалению, этот сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень постарались
          перевести на русский язык все странички, но, к сожалению, на данный момент технически не возможно предоставить
          100% русскую версию, поэтому мы активно работаем над разработкой инструкции по использованию календаря Дарьи,
          которая очень скоро будет опубликована на этой странице. Спасибо за ваше терпение и понимание 😇
        </Alert>
      </Collapse>
    </>
  );
}

export default Booking;
