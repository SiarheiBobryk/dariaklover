import * as React from 'react';
import { Helmet } from 'react-helmet';

import { NavLink as RouterNavLink } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

import pricingMetaData from './pricingMetaData';
import pricingContent from './pricingContent.md';
import Markdown from '../../components/Markdown';
import bookingMetaData from '../Booking/bookingMetaData';

function Pricing() {
  return (
    <>
      <Helmet>
        <title>{pricingMetaData.title}</title>
      </Helmet>
      <Markdown>{pricingContent}</Markdown>
      <Alert severity="info" variant="outlined">
        В данный момент все встречи проводятся только онлайн.
      </Alert>
      <Alert severity="info" variant="outlined">
        Для новых клиентов запись на платные встречи доступна только после установочной встречи. Нажмите{' '}
        <Link component={RouterNavLink} to={bookingMetaData.path}>
          {bookingMetaData.heading}
        </Link>
        .
      </Alert>
      <Alert severity="warning" variant="outlined">
        Планируется повышение цен в апреле 2023 года.
      </Alert>
    </>
  );
}

export default Pricing;
