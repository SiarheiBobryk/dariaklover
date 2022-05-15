import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Alert, AlertTitle } from '@mui/material';

import Introduction from '../../posts/Introduction/Introduction';
import mainMetaData from './mainMetaData';

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <Introduction heading={mainMetaData.heading} />
      <Alert sx={{ my: 1 }} severity="info">
        <AlertTitle>Ведутся работы</AlertTitle>В связи с тем, что на сайте ведутся активные работы, что-то может
        отсутствовать или не работать. Спасибо за понимание 😇
      </Alert>
    </>
  );
}

export default Main;
