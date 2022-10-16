import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { styled, Theme, useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import Heading from '../../components/Heading';
import helpMetaData from './helpMetaData';
import howToBookMetaData from '../HowToBook/howToBookMetaData';
import LinkBlank from '../../components/LinkBlank';
import Paragraph from '../../components/Paragraph';

export const PUBLIC_PATH = 'responsive_images';

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    maxWidth: '100%',
    borderRadius: theme.typography.pxToRem(8),
  };
});

export const Figure = styled('figure')(function styleFigure({ theme }) {
  return {
    marginTop: 0,
    marginRight: 0,
    marginBottom: theme.typography.pxToRem(8),
    marginLeft: 0,
  };
});

function Help() {
  const {
    instagram: { href: instagramHref },
    telegram: { href: telegramHref },
    whatsapp: { href: whatsappHref },
    email,
  }: Config = React.useContext(AppConfigContext);
  const theme: Theme = useTheme();
  const isMedium: boolean = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Helmet>
        <title>{helpMetaData.title}</title>
      </Helmet>
      <Heading>{helpMetaData.heading}</Heading>

      <List>
        <ListItem disableGutters>
          <ListItemButton component={RouterNavLink} to={howToBookMetaData.path} dense={!isMedium}>
            <ListItemText primary={<Paragraph>{howToBookMetaData.heading}</Paragraph>} />
          </ListItemButton>
        </ListItem>
      </List>
      {/* TODO: Move that to the separate component */}
      <Alert severity="info">
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
    </>
  );
}

export default Help;
