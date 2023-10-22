import * as React from 'react';
import { Helmet } from 'react-helmet';

import FocusingOnHealthMDX from './focusingOnHealth.mdx';
import focusingOnHealthMetaData from './focusingOnHealthMetaData';

function FocusingOnHealth() {
  return (
    <>
      <Helmet>
        <title>{focusingOnHealthMetaData.title}</title>
      </Helmet>
      <FocusingOnHealthMDX />
    </>
  );
}

export default FocusingOnHealth;
