import * as React from 'react';
import { Helmet } from 'react-helmet';

import ReferencesPost from '../../components/References';
import referencesMetaData from './referencesMetaData';

function References() {
  return (
    <>
      <Helmet>
        <title>{referencesMetaData.title}</title>
      </Helmet>
      <ReferencesPost heading={referencesMetaData.heading} />
    </>
  );
}

export default References;
