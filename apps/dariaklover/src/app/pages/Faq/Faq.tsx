import * as React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';

import faqContent from './faqContent.md';
import faqMetaData from './faqMetaData';

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
