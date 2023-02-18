import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import mainMetaData from './mainMetaData';
import Paragraph from '../../components/Paragraph';

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <Heading>{mainMetaData.heading}</Heading>
      <Paragraph>Всем привет!</Paragraph>
      {/* TODO: Use a constant here */}
      <Paragraph>
        Я Дарья Кловер - дипломированный health-коуч, специалист по здоровому образу жизни и немедикаментозному
        оздоровлению.
      </Paragraph>
      <Paragraph>
        Помогаю своим клиентам вести здоровый образ жизни и предотвратить появление хронических заболеваний, а также
        повысить качество жизни, улучшить самочувствие, делюсь рекомендациями для восстановления и поддержания здоровья.
      </Paragraph>
      <Paragraph>
        Разбираю запрос клиента с разных сторон, что помогает увидеть полную картину конкретной ситуации и ее причины.
        Использую различные подходы и инструменты, чтобы помочь проработать эти причины и прийти к оптимальному решению.
      </Paragraph>
      {/* TODO: The better (React) alternative for `strong` here? */}
      <Paragraph>
        Одна из моих главных задач - осознание клиентом того, <strong>что, как и почему нужно делать</strong>, чтобы
        достичь желаемого результата.
      </Paragraph>
    </>
  );
}

export default Main;
