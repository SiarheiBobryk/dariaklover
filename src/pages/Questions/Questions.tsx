import * as React from 'react';
import { Helmet } from 'react-helmet';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Heading from '../../components/Heading';
import LinkBlank from '../../components/LinkBlank';
import Paragraph from '../../components/Paragraph';
import questionsMetaData from './questionsMetaData';

function Questions() {
  return (
    <>
      <Helmet>
        <title>{questionsMetaData.title}</title>
      </Helmet>
      <Heading>{questionsMetaData.heading}</Heading>
      <Paragraph>Пожалуйста, перейдите по ссылке ниже. Там будет форма, чтобы задать вопрос Дарье.</Paragraph>
      <Paragraph>
        {/* eslint-disable-next-line max-len */}
        <LinkBlank href="https://docs.google.com/forms/d/e/1FAIpQLSedaIyUajfTsT7ymkNJd8umXnUV-Tc2q6OTmw3Xk8NGB9Hs0A/viewform?usp=sf_link">
          Вопрос Дарье Кловер
        </LinkBlank>
      </Paragraph>
      <Alert severity="warning">
        <AlertTitle>Система тестируется</AlertTitle>
        Обращаем ваше внимание, что страничка, где можно задать вопрос, находится в режиме тестирования и может быть
        нестабильна.
      </Alert>
    </>
  );
}

export default Questions;
