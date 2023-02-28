import * as React from 'react';
import { Helmet } from 'react-helmet';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import AlertHelp from '../../components/AlertHelp';
import howToBookMetaData from './howToBookMetaData';
import Markdown from '../../components/Markdown';
import howToBookContent from './howToBookContent.md';

function HowToBook() {
  return (
    <>
      <Helmet>
        <title>{howToBookMetaData.title}</title>
      </Helmet>
      <Markdown>{howToBookContent}</Markdown>
      {/* SOMEDAY: Move these "Alert"s to the MD content. Proper mapping is required */}
      <Alert severity="info" variant="outlined">
        <AlertTitle>Русский язык</AlertTitle>
        Система записи на консультацию находится на стороннем сервисе, который очень простой и понятный, однако этот
        сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень постарались перевести на русский
        язык все элементы на страничках, но, к сожалению, на данный момент технически не возможно предоставить 100%
        русскую версию.
      </Alert>
      <AlertHelp />
    </>
  );
}

export default HowToBook;
