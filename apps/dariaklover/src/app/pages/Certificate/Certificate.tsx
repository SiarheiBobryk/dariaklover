import { styled } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import certificateMetaData from './certificateMetaData';

// TODO: Move in to ".env"
export const PUBLIC_PATH = 'assets/responsive_images';

const item = {
  img: `${PUBLIC_PATH}/certificate-health-coach-h.jpg`,
  title: 'TODO: Add a title here',
  subtitle: 'TODO: Add a subtitle (if applicable)',
};

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.typography.pxToRem(8),
    width: '100%',
  };
});

function Certificate() {
  return (
    <>
      <Helmet>
        <title>{certificateMetaData.title}</title>
      </Helmet>
      <Img src={item.img} alt={item.title} loading="lazy" />
    </>
  );
}

export default Certificate;
