import * as React from 'react';
import { Helmet } from 'react-helmet';

import HowToBookMDX from './howToBook.mdx';
import howToBookMetaData from './howToBookMetaData';

function HowToBook() {
  return (
    <>
      <Helmet>
        <title>{howToBookMetaData.title}</title>
      </Helmet>
      <HowToBookMDX />
    </>
  );
}

export default HowToBook;
