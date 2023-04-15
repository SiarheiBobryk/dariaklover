import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import certificateMetaData from './certificateMetaData';
import { certificatesMap } from '../../components/Certificates';
import CertificateComponent from '../../components/Certificate';

function Certificate() {
  const { certificateId = '' } = useParams();
  const { title: heading = '', titleFull = '', subtitleFull = '' } = certificatesMap[certificateId] ?? {};
  return (
    <>
      <Helmet>
        <title>{certificateMetaData.title}</title>
      </Helmet>
      {certificateId && (
        <>
          <Typography component="h2" variant="h6" gutterBottom>
            {heading}
          </Typography>
          <CertificateComponent certificateId={certificateId} title={titleFull} subtitle={subtitleFull} />
        </>
      )}
    </>
  );
}

export default Certificate;
