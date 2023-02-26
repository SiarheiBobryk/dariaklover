import * as React from 'react';
import { Helmet } from 'react-helmet';

import faqMetaData from './faqMetaData';
import faqContent from './faqContent.md';
import Markdown from '../../components/Markdown';

function Faq() {
  return (
    <>
      <Helmet>
        <title>{faqMetaData.title}</title>
      </Helmet>
      <Markdown>{faqContent}</Markdown>
    </>
  );
}

export default Faq;
