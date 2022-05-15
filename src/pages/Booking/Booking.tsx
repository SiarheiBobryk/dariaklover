import * as React from 'react';
import { Helmet } from 'react-helmet';

import BookingPost from '../../posts/Booking';
import bookingMetaData from './bookingMetaData';

function References() {
  return (
    <>
      <Helmet>
        <title>{bookingMetaData.title}</title>
      </Helmet>
      <BookingPost heading={bookingMetaData.heading} />
    </>
  );
}

export default References;
