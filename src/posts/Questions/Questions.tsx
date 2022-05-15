import * as React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Paragraph from '../../components/Paragraph';
import Heading from '../../components/Heading';

export interface QuestionsProps {
  heading?: string;
}

function Questions(props: QuestionsProps) {
  const { heading } = props;

  return (
    <>
      <Heading>{heading}</Heading>
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
