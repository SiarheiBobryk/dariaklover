import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import bookingMetaData from './bookingMetaData';

function References() {
  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <Heading>{bookingMetaData.heading}</Heading>
      WIP
    </>
  );
}

export default References;
