import * as React from 'react';
import { Helmet } from 'react-helmet';

import Introduction from '../../posts/Introduction/Introduction';
import mainMetaData from './mainMetaData';

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
