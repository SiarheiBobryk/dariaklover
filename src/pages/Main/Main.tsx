import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';

import References from '../../components/References';

function Main() {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      {/* References block */}
      <Typography component="h2" variant="h5">
        Отзывы клиентов
      </Typography>
      <References />
    </>
  );
}

export default Main;
