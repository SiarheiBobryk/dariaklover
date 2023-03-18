import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import certificateMetaData from './certificateMetaData';
import { certificatesMap } from '../../components/Certificates';

// TODO: Move in to ".env"
export const PUBLIC_PATH = 'assets/responsive_images';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.typography.pxToRem(8),
    width: '100%',
  };
});

function Certificate() {
  const { certificateId = '' } = useParams();
  const { title: heading, titleFull, subtitleFull } = certificatesMap[certificateId];
  return (
    <>
      <Helmet>
        <title>{certificateMetaData.title}</title>
      </Helmet>
      <Typography component="h2" variant="h6" gutterBottom>
        {heading}
      </Typography>
      {certificateId && (
        <Box component="figure" sx={{ margin: 0 }}>
          <Img src={`${PUBLIC_PATH}/${certificateId}.jpg`} alt={heading} loading="lazy" />
          <Typography component="figcaption" variant="body2">
            {titleFull}
            <br />
            <small>{subtitleFull}</small>
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Certificate;
