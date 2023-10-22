import * as React from 'react';
import { Helmet } from 'react-helmet';

import FaqMDX from './faq.mdx';
import faqMetaData from './faqMetaData';

function Faq() {
  return (
    <>
      <Helmet>
        <title>{faqMetaData.title}</title>
      </Helmet>
      <FaqMDX />
    </>
  );
}

export default Faq;
