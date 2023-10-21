import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import ReferencesComponent from '../../components/References';

import referencesMetaData from './referencesMetaData';

function References() {
  return (
    <>
      <Helmet>
        <title>{referencesMetaData.title}</title>
      </Helmet>
      <Heading>{referencesMetaData.heading}</Heading>
      <ReferencesComponent />
    </>
  );
}

export default References;
