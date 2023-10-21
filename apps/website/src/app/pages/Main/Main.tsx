import * as React from 'react';
import { Helmet } from 'react-helmet';

import AvatarMui from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

import Heading from '../../components/Heading';
import Markdown from '../../components/Markdown';

import mainContent from './mainContent.md';
import mainMetaData from './mainMetaData';

const { NX_IMAGES_PATH = '' } = process.env;

export const AvatarContainer = styled('div')(function styleAvatarContainer() {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});

export const Avatar = styled(AvatarMui)(function styleAvatar({ theme }) {
  return {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(1),
  };
});

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <Heading>{mainMetaData.heading}</Heading>
      <AvatarContainer>
        <Avatar alt="Дарья Кловер" src={`${NX_IMAGES_PATH}/photo-s.jpg`} />
      </AvatarContainer>
      <Markdown>{mainContent}</Markdown>
    </>
  );
}

export default Main;
