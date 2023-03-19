import * as React from 'react';
import { Helmet } from 'react-helmet';

import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import Heading from '../../components/Heading';
import mainMetaData from './mainMetaData';
import Paragraph from '../../components/Paragraph';

export const PUBLIC_PATH = 'assets/responsive_images';

export const AvatarContainer = styled('div')(function styleAvatarContainer() {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});

export const AvatarStyled = styled(Avatar)(function styleAvatar({ theme }) {
  return {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1),
  };
});

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <Heading>{mainMetaData.heading}</Heading>
      <AvatarContainer>
        <AvatarStyled alt="Дарья Кловер" src={`${PUBLIC_PATH}/photo-s.jpg`} />
      </AvatarContainer>
      <Paragraph>Всем привет!</Paragraph>
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
      <Paragraph>
        Одна из моих главных задач - осознание клиентом того, <strong>что, как и почему нужно делать</strong>, чтобы
        достичь желаемого результата.
      </Paragraph>
    </>
  );
}

export default Main;
