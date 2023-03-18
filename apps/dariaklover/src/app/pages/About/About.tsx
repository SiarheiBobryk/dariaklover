import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';
import aboutMetaData from './aboutMetaData';

import aboutContent from './aboutContent.md';
import Markdown from '../../components/Markdown';
import Certificates from '../../components/Certificates';

export const PUBLIC_PATH = 'assets/responsive_images';

function About() {
  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <Markdown>{aboutContent}</Markdown>
      <Typography component="h2" variant="h6">
        TODO: Add a heading here
      </Typography>
      <Certificates />
    </>
  );
}

export default About;
