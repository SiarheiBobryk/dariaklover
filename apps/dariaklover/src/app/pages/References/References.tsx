import * as React from 'react';
import { Helmet } from 'react-helmet';

import ReferencesComponent from '../../components/References';

import referencesMetaData from './referencesMetaData';

function References() {
  return (
    <>
      <Helmet>
        <title>{referencesMetaData.title}</title>
      </Helmet>
      <ReferencesComponent heading={referencesMetaData.heading} />
    </>
  );
}

export default References;
