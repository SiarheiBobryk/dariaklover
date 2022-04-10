import * as React from 'react';

import { OverridableStringUnion } from '@mui/types';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// eslint-disable-next-line no-restricted-imports
import { Variant } from '@mui/material/styles/createTypography';

interface IntroductionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.ElementType<any>;
  variant?: OverridableStringUnion<Variant | 'inherit'>;
}

function Introduction(props: IntroductionProps) {
  const { component = 'h2', variant = 'h5' } = props;
  return (
    <>
      <Typography component={component} variant={variant}>
        Кто я и что я делаю
      </Typography>
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
