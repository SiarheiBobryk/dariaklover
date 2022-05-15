import * as React from 'react';
import { Helmet } from 'react-helmet';

import ReferencesPost from '../../components/References';

export interface ReferencesMetaData {
  title: string;
  heading: string;
  path: string;
}

export const referencesMetaData: ReferencesMetaData = {
  title: 'Отзывы клинтов',
  heading: 'Отзывы клинтов',
  path: '/references',
};

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
