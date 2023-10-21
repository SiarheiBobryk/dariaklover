import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Link from '@mui/material/Link';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import mainMetaData from '../Main/mainMetaData';

import notFoundMetaData from './notFoundMetaData';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>{notFoundMetaData.title}</title>
      </Helmet>
      <Heading>{notFoundMetaData.heading}</Heading>
      <Paragraph>Упс... Очень жаль, но запрашиваемая вами страница не существует или была удалена.</Paragraph>
      <Paragraph>
        Вернуться на{' '}
        <Link component={RouterNavLink} to={mainMetaData.path}>
          главную страницу
        </Link>
      </Paragraph>
    </>
  );
}

export default NotFound;
