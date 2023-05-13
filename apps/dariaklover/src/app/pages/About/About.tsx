import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import Certificates from '../../components/Certificates';
import Heading from '../../components/Heading';
import Markdown from '../../components/Markdown';

import aboutContent from './aboutContent.md';
import aboutMetaData from './aboutMetaData';

const { NX_IMAGES_PATH = '' } = process.env;

export const Picture = styled('picture')(function stylePicture() {
  return {
    '&::after': {
      content: '""',
      clear: 'both',
      display: 'block',
    },
  };
});

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    float: 'right',
    borderRadius: theme.typography.pxToRem(8),
    margin: theme.spacing(1),
    [theme.breakpoints.up('xs')]: {
      width: theme.spacing(22),
    },
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(28),
    },
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(38),
    },
  };
});

function About() {
  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <Heading>Обо мне</Heading>
      <Picture>
        <source type="image/webp" srcSet={`${NX_IMAGES_PATH}/photo-v.webp`} />
        <source type="image/jpeg" srcSet={`${NX_IMAGES_PATH}/photo-v.jpeg`} />
        <Img src={`${NX_IMAGES_PATH}/photo-v.jpeg`} alt="Дарья Кловер" loading="lazy" />
        <Markdown>{aboutContent}</Markdown>
      </Picture>
      <Typography component="h2" variant="h6" gutterBottom>
        Мои дипломы и сертификаты
      </Typography>
      <Certificates />
    </>
  );
}

export default About;
