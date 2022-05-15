import * as React from 'react';
import { Helmet } from 'react-helmet';

import QuestionsPost from '../../posts/Questions';
import questionsMetaData from './questionsMetaData';

function Questions() {
  return (
    <>
      <Helmet>
        <title>{questionsMetaData.title}</title>
      </Helmet>
      <QuestionsPost heading={questionsMetaData.heading} />
    </>
  );
}

export default Questions;
