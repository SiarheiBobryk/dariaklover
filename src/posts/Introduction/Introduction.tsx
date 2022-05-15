import * as React from 'react';

import { styled } from '@mui/material/styles';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import LinkBlank from '../../components/LinkBlank';

export const Strong = styled('strong')(() => {
  return {
    textDecoration: 'underline',
  };
});

export interface IntroductionProps {
  heading?: string;
}

function Introduction(props: IntroductionProps) {
  const { heading } = props;
  return (
    <>
      <Heading>{heading}</Heading>
      <Paragraph>Всем привет, я - Дарья Кловер!</Paragraph>
      <Paragraph>
        Я прохожу обучение в{' '}
        <LinkBlank href="https://uom.education/university" rel="noopener">
          Университете образовательной медицины (УОМ)
        </LinkBlank>{' '}
        и <i>PreventAge LifeStyle School</i> на интегративного health-коуча - специалиста по модификации образа жизни и
        немедикаментозному оздоровлению.
      </Paragraph>
      <Paragraph>
        Я помогаю своим клиентам вести здоровый образ жизни и предотвратить появление хронических заболеваний, а также
        повысить качество жизни, улучшить самочувствие, делюсь рекомендациями для восстановления и поддержания здоровья.
      </Paragraph>

      <Paragraph>
        Я разбираю запрос клиента с разных сторон, что помогает увидеть полную картину конкретной ситуации и ее причины.
        Я использую различные подходы и инструменты, чтобы помочь проработать эти причины и придти к решению запроса
        клиента.
      </Paragraph>

      {/* TODO: The better (React) alternative for `strong` here? */}
      <Paragraph>
        Одна из моих главных задач - осознание клиентом того, <Strong>что, как и почему нужно делать</Strong>, чтобы
        достичь желаемого результата.
      </Paragraph>
    </>
  );
}

export default Introduction;
