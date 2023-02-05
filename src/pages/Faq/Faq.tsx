import * as React from 'react';
import { Helmet } from 'react-helmet';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import faqMetaData from './faqMetaData';
import Heading from '../../components/Heading';
import LinkEmail from '../../components/LinkEmail';
import LinkSocial from '../../components/LinkSocial';
import Paragraph from '../../components/Paragraph';

export interface FaqData {
  question: string;
  answer: string | React.ReactNode;
  id: string;
}

export const faq: Array<FaqData> = [
  {
    question: 'Хочу записаться на консультацию, но нет подходящего места. Что делать?',
    answer: (
      <>
        {}
        Пожалуйста, свяжитесь со мной через <LinkSocial social="telegram" />, <LinkSocial social="whatsapp" /> или по{' '}
        <LinkEmail />.
      </>
    ),
    id: 'no-slots',
  },
  {
    question: 'Как подготовиться к сессии?',
    answer:
      'К сессии необходимо подготовить запрос. Тихое и комфортное место, где вас не будут отвлекать. Блокнот для записей и ручку.',
    id: 'how-to-prepare',
  },
  {
    question: 'Что такое "запрос"?',
    answer: 'Запрос - это задача, которую вы хотите решить с коучем в ходе сессии.',
    id: 'what-is-request',
  },
  {
    question: 'Со скольки лет можно работать с коучем?',
    answer: 'С 18 лет.',
    id: 'age-restrictions',
  },
  {
    question: 'Сколько нужно сессий, чтобы решить запрос?',
    answer:
      'Все индивидуально. Зависит от сложности запроса, вашей вовлеченности и комфортного для вас темпа решения задачи.',
    id: 'sessions-amount-required',
  },
];

function indexToNumber(index: number): number {
  return index + 1;
}

// TODO: Setup the proper scroll behavior here
function Faq() {
  return (
    <>
      <Helmet>
        <title>{faqMetaData.title}</title>
      </Helmet>
      <Heading>{faqMetaData.heading}</Heading>
      <Alert severity="warning">Страница находится в разработке</Alert>
      <List>
        {faq.map(function mapFaq(faqData: FaqData, index: number) {
          const { question, id } = faqData;
          return (
            <ListItem key={id}>
              <Link href={`#${id}`}>
                <Typography component="h3" sx={{ fontStyle: 'italic' }}>
                  {indexToNumber(index)}. {question}
                </Typography>
              </Link>
            </ListItem>
          );
        })}
      </List>
      {faq.map(function mapFaq(faqData: FaqData, index: number) {
        const { question, answer, id } = faqData;
        return (
          <Box id={id} component="section" key={id} sx={{ marginY: 2 }}>
            <Typography component="h3" sx={{ fontStyle: 'italic' }}>
              {indexToNumber(index)}. {question}
            </Typography>
            <Paragraph>{answer}</Paragraph>
          </Box>
        );
      })}
    </>
  );
}

export default Faq;
