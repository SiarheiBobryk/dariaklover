import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import AlertHelp from '../../components/AlertHelp';
import Heading from '../../components/Heading';
import helpMetaData from './helpMetaData';
import howToBookMetaData from '../HowToBook/howToBookMetaData';

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
  return (
    <>
      <Helmet>
        <title>{helpMetaData.title}</title>
      </Helmet>
      <Heading>{helpMetaData.heading}</Heading>

      <List>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <Link component={RouterNavLink} to={howToBookMetaData.path}>
                {howToBookMetaData.heading}
              </Link>
            }
          />
        </ListItem>
      </List>
      <AlertHelp />
    </>
  );
}

export default Help;
