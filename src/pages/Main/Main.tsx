import * as React from 'react';
import { Helmet } from 'react-helmet';

import Introduction from '../../posts/Introduction/Introduction';

export interface MainMetaData {
  title: string;
  heading: string;
  path: string;
}

export const mainMetaData: MainMetaData = {
  title: 'Главная страница',
  heading: 'Кто я и что я делаю',
  path: '/',
};

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <Introduction heading={mainMetaData.heading} />
    </>
  );
}

export default Main;
