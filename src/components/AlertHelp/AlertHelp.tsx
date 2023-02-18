import * as React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import LinkSocial from '../LinkSocial';
import LinkEmail from '../LinkEmail';

export interface AlertHelpProps {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  severity?: 'success' | 'info' | 'warning' | 'error';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlertHelp = React.forwardRef(function AlertHelp(props: AlertHelpProps, ref: React.Ref<any>) {
  const { children, open, onClose, ...other } = props;

  return (
    <Alert ref={ref} severity="info" variant="outlined" {...other}>
      <AlertTitle>Связаться с нами</AlertTitle>
      Если у вас остались вопросы или вы продолжаете испытывать сложности в работе с сайтом, то не стесняйтесь и
      свяжитесь с нами через <LinkSocial social="telegram" />, <LinkSocial social="whatsapp" /> или по <LinkEmail />. Мы
      обязательно поможем.
    </Alert>
  );
});

export default AlertHelp;
