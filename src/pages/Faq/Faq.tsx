import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import faqMetaData from './faqMetaData';

function Faq() {
  return (
    <>
      <Helmet>
        <title>{faqMetaData.title}</title>
      </Helmet>
      <Heading>{faqMetaData.heading}</Heading>
      {/* TODO: Make a separate components for every messager */}
    </>
  );
}

export default Faq;
