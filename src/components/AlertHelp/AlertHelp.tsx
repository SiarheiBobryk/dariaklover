import * as React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import LinkBlank from '../LinkBlank';

export interface AlertHelpProps {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  severity?: 'success' | 'info' | 'warning' | 'error';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AlertHelp = React.forwardRef(function AlertHelp(props: AlertHelpProps, ref: React.Ref<any>) {
  const { children, open, onClose, ...other } = props;
  const {
    instagram: { href: instagramHref },
    telegram: { href: telegramHref },
    whatsapp: { href: whatsappHref },
    email,
  }: Config = React.useContext(AppConfigContext);

  return (
    <Alert ref={ref} severity="info" {...other}>
      <AlertTitle>Связаться с нами</AlertTitle>
      Если у вас остались вопросы или вы продолжаете испытывать сложности в работе с сайтом, то не стесняйтесь и
      свяжитесь с нами через{' '}
      <LinkBlank href={instagramHref} rel="noopener">
        Instagram
      </LinkBlank>
      ,{' '}
      <LinkBlank href={telegramHref} rel="noopener">
        Telegram
      </LinkBlank>
      ,{' '}
      <LinkBlank href={whatsappHref} rel="noopener">
        WhatsApp
      </LinkBlank>{' '}
      или по{' '}
      <LinkBlank href={`mailto:  ${email}`} rel="noopener">
        электронной почте
      </LinkBlank>
      . Мы обязательно поможем.
    </Alert>
  );
});

export default AlertHelp;
