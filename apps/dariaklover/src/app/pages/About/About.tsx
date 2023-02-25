import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import aboutMetaData from './aboutMetaData';
import Heading from '../../components/Heading';
import LinkBlank from '../../components/LinkBlank';
import Paragraph from '../../components/Paragraph';

function About() {
  const {
    instagram: { href: instagramHref, id: instagramId },
    fullName,
  }: Config = React.useContext(AppConfigContext);

  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <Heading>{aboutMetaData.heading}</Heading>
      <Paragraph>Привет! Я {fullName}.</Paragraph>
      <Paragraph>
        Кловер - имя моего бренда. Почему так? От английского <Typography component="i">&apos;kləʊvər</Typography> -
        клевер, а логотип моего бренда - четырехлистный клевер. Для меня это олицетворение здоровья, баланса и
        целостности. Значение этого символа хорошо отражает меня и мою работу, во что я верю и что делаю.
      </Paragraph>
      <Paragraph>
        В прошлом я врач-терапевт, врач общей практики, массажист и косметик. Я знаю не понаслышке, что для сохранения
        здоровья нужно не только владеть нужной информацией, но и уметь разумно ее применить.
      </Paragraph>
      <Paragraph>
        Теперь я практикующий health-коуч - специалист по здоровому образу жизни и немедикаментозному оздоровлению.
      </Paragraph>
      <Paragraph>
        Моя роль как health-коуча -{' '}
        <strong>
          помочь человеку уверенно пройти его путь к оздоровлению, создавая благоприятную атмосферу для изменений,
          снабжая необходимыми знаниями и инструментами для сохранения и управления своим здоровьем
        </strong>
        .
      </Paragraph>
      <Paragraph>
        Познакомиться со мной получше вы можете через мой личный Instagram{' '}
        <LinkBlank href={instagramHref}>{instagramId}</LinkBlank>. Там я делюсь контентом о своем личностном и
        профессиональном пути.
      </Paragraph>
      <Paragraph>Рада вам и добро пожаловать в гости!</Paragraph>
    </>
  );
}

export default About;
