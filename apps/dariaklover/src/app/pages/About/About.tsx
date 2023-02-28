import * as React from 'react';
import { Helmet } from 'react-helmet';

import aboutMetaData from './aboutMetaData';

import aboutContent from './aboutContent.md';
import Markdown from '../../components/Markdown';

function About() {
  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <Markdown>{aboutContent}</Markdown>
    </>
  );
}

export default About;
