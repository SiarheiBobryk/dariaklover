import { MouseEventHandler, ReactNode, Ref, forwardRef } from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import LinkEmail from '../LinkEmail';
import LinkSocial from '../LinkSocial';

export interface AlertHelpProps {
  title?: string;
  children?: ReactNode;
  open?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  severity?: 'success' | 'info' | 'warning' | 'error';
}

const AlertHelp = forwardRef(function AlertHelp(props: AlertHelpProps, ref: Ref<HTMLDivElement>) {
  const {
    title = 'Связаться с нами',
    children = (
      <>
        Если у вас остались вопросы или вы продолжаете испытывать сложности в работе с сайтом, то не стесняйтесь и
        свяжитесь с нами через <LinkSocial social="telegram" />, <LinkSocial social="whatsapp" /> или по <LinkEmail />.
        Мы обязательно поможем.
      </>
    ),
    open,
    onClose,
    ...other
  } = props;

  return (
    <Alert ref={ref} severity="info" variant="outlined" {...other}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
});

export default AlertHelp;
