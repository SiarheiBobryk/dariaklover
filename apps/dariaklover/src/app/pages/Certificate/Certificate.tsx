import { styled } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import certificateMetaData from './certificateMetaData';

// TODO: Move in to ".env"
export const PUBLIC_PATH = 'assets/responsive_images';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.typography.pxToRem(8),
    width: '100%',
  };
});

function Certificate() {
  const { certificateId } = useParams();
  return (
    <>
      <Helmet>
        <title>{certificateMetaData.title}</title>
      </Helmet>
      {certificateId && <Img src={`${PUBLIC_PATH}/${certificateId}.jpg`} alt="TODO: Add a title here" loading="lazy" />}
    </>
  );
}

export default Certificate;
