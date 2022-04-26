import * as React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Heading from '../../components/Heading';

function Introduction() {
  return (
    <>
      <Heading>Кто я и что я делаю</Heading>
      <Typography>Всем привет, я - Дарья Кловер!</Typography>
      <Typography>
        Я прохожу обучение в{' '}
        <Link
          href="https://uom.education/university"
          sx={{ display: 'inline-flex', alignItems: 'center', marginBottom: 0 }}
          rel="noopener"
        >
          Университете образовательной медицины (УОМ) <OpenInNewIcon fontSize="small" />
        </Link>{' '}
        и <i>PreventAge LifeStyle School</i> на интегративного health-коуча - специалиста по модификации образа жизни и
        немедикаментозному оздоровлению.
      </Typography>
      <Typography>
        Я помогаю своим клиентам вести здоровый образ жизни и предотвратить появление хронических заболеваний, а также
        повысить качество жизни, улучшить самочувствие, делюсь рекомендациями для восстановления и поддержания здоровья.
      </Typography>

      <Typography>
        Я разбираю запрос клиента с разных сторон, что помогает увидеть полную картину конкретной ситуации и ее причины.
        Я использую различные подходы и инструменты, чтобы помочь проработать эти причины и придти к решению запроса
        клиента.
      </Typography>

      <Typography>
        Одна из моих главных задач - осознание клиентом того, <strong>что, как и почему нужно делать</strong>, чтобы
        достичь желаемого результата.
      </Typography>
    </>
  );
}

export default Introduction;
