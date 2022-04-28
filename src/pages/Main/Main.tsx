import * as React from 'react';
import { Helmet } from 'react-helmet';

// import Heading from '../../components/Heading';
// import References from '../../components/References';
import Introduction from '../../posts/Introduction/Introduction';

function Main() {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      {/* Introduction block */}
      <Introduction />

      {/* References block */}
      {/* <Heading>Отзывы клиентов</Heading> */}
      {/* TODO: Double-check the pictures from security perspective */}
      {/* <References /> */}
    </>
  );
}

export default Main;
