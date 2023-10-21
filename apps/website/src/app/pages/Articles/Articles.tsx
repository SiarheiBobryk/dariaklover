import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Heading from '../../components/Heading';
import focusingOnHealthMetaData from '../FocusingOnHealth/focusingOnHealthMetaData';

import articlesMetaData from './articlesMetaData';

function Articles() {
  return (
    <>
      <Helmet>
        <title>{articlesMetaData.title}</title>
      </Helmet>
      <Heading>Мои публикации</Heading>
      <List>
        <ListItem>
          <Link component={RouterNavLink} to={focusingOnHealthMetaData.path}>
            {focusingOnHealthMetaData.heading}
          </Link>
        </ListItem>
      </List>
    </>
  );
}

export default Articles;
