import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';

import Certificates from '../../components/Certificates';
import ClearFix from '../../components/utils/ClearFix';

import AboutMDX from './about.mdx';
import aboutMetaData from './aboutMetaData';

function About() {
  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <ClearFix>
        <AboutMDX />
      </ClearFix>
      <Typography component="h2" variant="h6" gutterBottom>
        Мои дипломы и сертификаты
      </Typography>
      <Certificates />
    </>
  );
}

export default About;
