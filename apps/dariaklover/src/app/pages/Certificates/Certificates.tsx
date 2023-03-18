import * as React from 'react';

import { styled } from '@mui/material';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import CertificatesComponent from '../../components/Certificates';
import Heading from '../../components/Heading';
import Certificate from '../Certificate';
import certificatesMetaData from './certificatesMetaData';

// TODO: Move in to ".env"
export const PUBLIC_PATH = 'assets/responsive_images';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.typography.pxToRem(8),
    width: '100%',
  };
});

function Certificates() {
  const { certificateId } = useParams();

  return (
    <>
      <Helmet>
        <title>{certificatesMetaData.title}</title>
      </Helmet>
      <Heading>Мои дипломы и сертификаты</Heading>
      {certificateId ? <Certificate /> : <CertificatesComponent />}
    </>
  );
}

export default Certificates;
