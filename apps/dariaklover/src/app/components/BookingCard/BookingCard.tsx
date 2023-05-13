import * as React from 'react';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export interface BookingCardProps {
  children?: React.ReactNode;
  duration?: number;
  href?: string;
  title?: string;
  uri?: string;
  via?: string;
}

const BookingCard = React.forwardRef(function BookingCard(props: BookingCardProps, ref: React.Ref<HTMLDivElement>) {
  // NOTE: Keep "via" up to date with the Celendly Event
  const { title = '', duration = 60, via = 'Google Meet', href = '', uri, children, ...other } = props;
  const FREE_EVENT_URI = 'https://api.calendly.com/event_types/2f876851-1bd0-49d8-a89d-f017c56c1f17';
  return (
    <Card elevation={2} ref={ref} {...other}>
      <CardHeader title={title} />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ marginBottom: 1 }}>
          <Chip icon={<AccessTimeIcon />} size="small" label={`${duration} минут`} variant="outlined" />
          <Chip icon={<VideocamIcon />} size="small" label={via} variant="outlined" />
          {uri === FREE_EVENT_URI && (
            <Chip icon={<MoneyOffIcon />} size="small" label="Без оплаты" variant="outlined" />
          )}
        </Stack>
        {children}
      </CardContent>
      <CardActions>
        <Button aria-label="Выбрать дату и время" startIcon={<EventIcon />} href={href} rel="noopener" target="_blank">
          Выбрать дату и время
        </Button>
      </CardActions>
    </Card>
  );
});

export default BookingCard;
