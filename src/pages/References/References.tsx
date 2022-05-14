import * as React from 'react';
import { Helmet } from 'react-helmet';

import References from '../../components/References';

function Main() {
  return (
    <>
      <Helmet>
        <title>Отзывы клинтов</title>
      </Helmet>
      <References />
    </>
  );
}

export default Main;
