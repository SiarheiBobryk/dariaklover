import * as React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import focusingOnHealthContent from './focusingOnHealthContent.md';
import focusingOnHealthMetaData from './focusingOnHealthMetaData';

function FocusingOnHealth() {
  return (
    <>
      <Helmet>
        <title>{focusingOnHealthMetaData.title}</title>
      </Helmet>
      <Markdown>{focusingOnHealthContent}</Markdown>
    </>
  );
}

export default FocusingOnHealth;
