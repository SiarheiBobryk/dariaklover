import * as React from 'react';
import { Helmet } from 'react-helmet';

import MainMdx from './main.mdx';
import mainMetaData from './mainMetaData';

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <MainMdx />
    </>
  );
}

export default Main;
