import { styled } from '@mui/material';
import * as React from 'react';
import { Helmet } from 'react-helmet';

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
  return (
    <>
      <Helmet>
        <title>{certificatesMetaData.title}</title>
      </Helmet>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum beatae at voluptates sint, minima asperiores
        quam ab, et magni inventore iure exercitationem dignissimos aliquam distinctio laboriosam dicta ullam ipsum
        culpa?
      </div>
    </>
  );
}

export default Certificates;
