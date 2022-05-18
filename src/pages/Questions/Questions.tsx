import * as React from 'react';
import { Helmet } from 'react-helmet';

import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import questionsMetaData from './questionsMetaData';

function Questions() {
  return (
    <>
      <Helmet>
        <title>{questionsMetaData.title}</title>
      </Helmet>
      <Heading>{questionsMetaData.heading}</Heading>
      <Paragraph>Здесь можно будет задать вопрос Дарье</Paragraph>
      <Alert sx={{ my: 1 }} severity="info">
        <AlertTitle>Как задать вопрос</AlertTitle>
        Форма, где можно будет задать вопрос, а также посмотреть часто задаваемые вопросы, скоро будет опубликована на
        этой странице. Спасибо за ваше терпение 😇
      </Alert>
    </>
  );
}

export default Questions;
