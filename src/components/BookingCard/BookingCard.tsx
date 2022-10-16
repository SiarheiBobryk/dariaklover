import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import VideocamIcon from '@mui/icons-material/Videocam';

export interface BookingCardProps {
  title?: string;
  duration?: number;
  via?: string;
  children?: React.ReactNode;
  href?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingCard = React.forwardRef(function BookingCard(props: BookingCardProps, ref: React.Ref<any>) {
  const { title = '', duration = 60, via = 'Google Meet', href = '', children, ...other } = props;
  return (
    <Card elevation={2} ref={ref} {...other}>
      <CardHeader title={title} />
      <CardContent>
        <Stack direction="row" spacing={1} sx={{ marginBottom: 1 }}>
          <Chip icon={<AccessTimeIcon />} size="small" label={`${duration} минут`} variant="outlined" />
          <Chip icon={<VideocamIcon />} size="small" label={via} variant="outlined" />
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
