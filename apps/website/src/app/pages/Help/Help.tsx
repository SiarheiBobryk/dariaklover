import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import AlertHelp from '../../components/AlertHelp';
import Heading from '../../components/Heading';
import faqMetaData from '../Faq/faqMetaData';
import howToBookMetaData from '../HowToBook/howToBookMetaData';

import helpMetaData from './helpMetaData';

function Help() {
  return (
    <>
      <Helmet>
        <title>{helpMetaData.title}</title>
      </Helmet>
      <Heading>{helpMetaData.heading}</Heading>
      <List>
        <ListItem>
          <Link component={RouterNavLink} to={faqMetaData.path}>
            {faqMetaData.heading}
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterNavLink} to={howToBookMetaData.path}>
            {howToBookMetaData.heading}
          </Link>
        </ListItem>
      </List>
      <AlertHelp />
    </>
  );
}

export default Help;
